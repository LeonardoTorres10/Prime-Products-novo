import { exec } from 'child_process';
import util from 'util';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const execAsync = util.promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');

async function checkAndPush() {
  console.log("1. PRE-CHECK...");
  const status = (await execAsync('git status --short', { cwd: ROOT_DIR })).stdout;
  const branch = (await execAsync('git branch --show-current', { cwd: ROOT_DIR })).stdout.trim();
  const remote = (await execAsync('git remote -v', { cwd: ROOT_DIR })).stdout.trim();
  const log = (await execAsync('git log -1 --oneline', { cwd: ROOT_DIR })).stdout.trim();

  console.log("2. FETCH...");
  await execAsync('git fetch', { cwd: ROOT_DIR });
  
  // Check ahead/behind
  // Assuming tracking branch is origin/<branch>
  let ahead = 0, behind = 0;
  try {
    const revList = (await execAsync(`git rev-list --left-right --count HEAD...origin/${branch}`, { cwd: ROOT_DIR })).stdout.trim();
    const parts = revList.split(/\\s+/);
    ahead = parseInt(parts[0], 10);
    behind = parseInt(parts[1], 10);
  } catch(e) {
    console.error("Tracking branch not set or error checking ahead/behind.", e);
  }

  console.log(`BRANCH LOCAL: ${branch}`);
  console.log(`BRANCH REMOTO: origin/${branch}`);
  console.log(`LOCAL ESTÁ: ahead ${ahead}, behind ${behind}`);

  let pushOk = false;
  if (behind > 0) {
    console.error("ABORT: Branch local is behind remote!");
    process.exit(1);
  } else {
    console.log("3. PUSH...");
    try {
      await execAsync(`git push origin ${branch}`, { cwd: ROOT_DIR });
      pushOk = true;
    } catch(e) {
      console.error("PUSH FAILED", e);
    }
  }

  console.log("4. VERIFICAÇÃO PÓS-PUSH...");
  let finalAhead = 0, finalBehind = 0;
  if (pushOk) {
    try {
      const revListPost = (await execAsync(`git rev-list --left-right --count HEAD...origin/${branch}`, { cwd: ROOT_DIR })).stdout.trim();
      const partsPost = revListPost.split(/\\s+/);
      finalAhead = parseInt(partsPost[0], 10);
      finalBehind = parseInt(partsPost[1], 10);
    } catch(e) {}
  }
  
  const statusPost = (await execAsync('git status --short', { cwd: ROOT_DIR })).stdout;

  const res = {
    branch,
    remote,
    log,
    ahead,
    behind,
    pushOk,
    finalAhead,
    finalBehind,
    statusPost
  };
  
  await fs.writeJson(path.join(ROOT_DIR, 'docs', 'auditoria-assets', 'push_result.json'), res, { spaces: 2 });
  console.log("Done.");
}

checkAndPush().catch(console.error);
