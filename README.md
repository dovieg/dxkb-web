# The DXKB web application

## System Requirements

Node.js is required to run the application. The latest LTS or Current stable build will both work. Make sure `NPM` is also installed alongside `Node.js` (Should be by default).

[Node.js Downloads](https://nodejs.org/en/download/) for Windows, MacOS, and Linux

If using **MacOS** it may be easier to install via [Homebrew](https://brew.sh/)
```
brew install node
```

## First Steps
Clone or Fork & Clone the [BV-BRC-Web](https://github.com/BV-BRC/BV-BRC-Web) repository to your local machine.

### Git
```
git clone https://github.com/BV-BRC/BV-BRC-Web.git
cd BV-BRC-Web
npm install
```

**Or**

### GitHub CLI:
```
gh repo clone BV-BRC/BV-BRC-Web
cd BV-BRC-Web
npm install
```

**Note:** After you run `npm install` you must run to fetch all modules in the node_modules directory.

```
git submodule update --init
```

Make sure you must `npm install` in the BV-BRC-Web directory first though!

## Running the web application
Run from inside the directory:
```
npm start
```

Your local dev environment will run on ```http://localhost:3000/``` and you can access it here.

There is a file called `p3-web.conf` that is used for initial setup and config. The `p3-web.conf.sample` file that is included comes blank.

Please: `cp p3-web.conf.sample p3-web.conf` and edit as necessary. You may need to get the correct info from a team member so feel reach to reach out.

Note: if any configuration changes are made (i.e., changes to `./p3-web.conf`), then `./bin/p3-web` must be restarted for the effects to take place within the local dev application.

## Service info dialogs & documentation (`docsServiceURL`)

Each service page has an **ⓘ (info)** icon in its title that opens an **Overview** dialog
describing the service. **This content does not live in this repo.** At runtime the app fetches
an HTML page from the separate **[dxkb-docs](https://github.com/CEPI-dxkb/dxkb-docs)** site
(`git clone` it alongside this repo) and extracts the matching section.

- The fetch logic is in `public/js/p3/widget/app/AppBase.js` → `gethelp()`.
- It requests `docsServiceURL` + the widget's `applicationHelp` path, e.g.
  `https://www.dxkb.org/docs/quick_references/services/genome_annotation_service.html`,
  then injects the element whose `id` matches the info button's `name` (e.g. `overview`).
- `docsServiceURL` defaults to `https://www.dxkb.org/docs/` (see `config.js`; override in `p3-web.conf`).
- If the docs site is unreachable, the dialog shows a graceful
  "Help information is currently unavailable" message instead of a dead icon.

### Seeing the info dialogs work on your machine

`https://www.dxkb.org/docs/` may not be published yet. To render the dialogs locally, build the
docs from the **dxkb-docs** repo and serve them same-origin from this app:

```bash
# 1. Build the docs (see dxkb-docs/README.md for full details)
cd /path/to/dxkb-docs/docroot
python3 -m venv venv && source venv/bin/activate   # first time only
pip install -r ../requirements.txt                 # first time only
make html

# 2. Drop the built HTML into this app's static folder (git-ignored)
cp -r _build/html/* /path/to/dxkb-web/public/docs/

# 3. In this repo's p3-web.conf (git-ignored, local only), add:
#      "docsServiceURL": "/public/docs"
#    then restart:  npm start
```

Now click an ⓘ icon, e.g. <http://localhost:3000/app/Annotation>. Hard-refresh
(Ctrl+Shift+R) the first time, since `window.App.docsServiceURL` is cached in the browser.

> `public/docs/` and the `docsServiceURL` override are **local test scaffolding only** — both are
> git-ignored and must never be committed. Production keeps `docsServiceURL` pointing at
> `https://www.dxkb.org/docs/`, where the dxkb-docs site is published.

## Contributing
If you'd like to contribute please follow our [CONTRIBUTING.md]() guide for more information (coming soon).
