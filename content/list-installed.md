---
layout: base-layout.njk
---
# Get a list of installed packages on Debian/Ubuntu 

To list all installed packages on Ubuntu, you can use the `dpkg` command, which is a package manager for Debian-based systems like Ubuntu. Here is the command:

```bash
dpkg --get-selections
```

This will list all installed packages. The output will be quite long as it includes every package, including libraries and small utilities.

If you want to see only the major packages that were explicitly installed (not including dependencies), you can use the `apt-mark` command:

```bash
apt-mark showmanual
```

This will show a list of packages that were manually installed, which is usually a shorter list and might be closer to what you're interested in.

Remember to run these commands in the terminal.
