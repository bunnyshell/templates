# Automated Version Update Workflows

This directory contains GitHub Actions that automatically keep your Bunnyshell templates up-to-date with the latest versions of dependencies.

## 🔄 Code-Server Version Updates

### Workflows Available

1. **Daily Update** (`update-code-server-version.yml`)
   - **Schedule**: Runs daily at 2 AM UTC
   - **Purpose**: Regular version checks and updates
   - **Trigger**: Also runs on workflow file changes and manual dispatch

2. **Frequent Update** (`update-code-server-version-frequent.yml`)
   - **Schedule**: Runs every 6 hours
   - **Purpose**: More frequent version checks for critical updates
   - **Trigger**: Manual dispatch available

### How It Works

1. **Version Detection**: Fetches the latest version from Docker Hub registry
2. **Comparison**: Compares current version in `template.yaml` with latest available
3. **Update**: If a newer version exists, updates the file and creates a PR
4. **Automation**: Uses semantic versioning to ensure only valid versions are applied

### Features

- ✅ **Smart Updates**: Only creates PRs when updates are actually needed
- ✅ **Pull Request Creation**: Creates descriptive PRs for review
- ✅ **Automatic Branching**: Uses dedicated branches for updates
- ✅ **Labeling**: Applies appropriate labels for easy identification
- ✅ **Manual Triggering**: Can be run manually via GitHub Actions tab
- ✅ **Error Handling**: Gracefully handles API failures and version parsing

### Configuration

The workflows automatically:
- Update the `version` field in your `template.yaml`
- Create pull requests with descriptive titles and bodies
- Apply appropriate labels (`automated`, `dependencies`, `code-server`)
- Assign the repository owner for review

### Manual Usage

To manually trigger an update:

1. Go to **Actions** tab in your repository
2. Select **Update Code-Server Version** or **Update Code-Server Version (Frequent)**
3. Click **Run workflow**
4. The action will check for updates and create a PR if needed

### Customization

You can modify the workflows to:
- Change update frequency (modify cron schedules)
- Add additional dependencies to track
- Customize PR templates and labels
- Integrate with other CI/CD tools

### Security

- Uses `GITHUB_TOKEN` for authentication
- Only updates version strings (no code execution)
- Creates pull requests for review before merging
- Runs in isolated GitHub Actions environment

### Monitoring

Monitor the workflows via:
- **Actions** tab for execution history
- **Pull Requests** for pending updates
- **Repository Insights** for automation metrics

---

*These workflows help keep your templates current with the latest security patches and features.*
