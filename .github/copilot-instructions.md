# Giovanni Lion Portfolio Site - Hugo Academic Theme

This is a Hugo-based academic portfolio website using the Wowchemy Academic theme. The site has significant theme compatibility issues between Hugo versions and theme versions that require specific workarounds.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## CRITICAL: Build Compatibility Issues

**WARNING: The site currently has theme compatibility issues.** The Wowchemy v5 theme has missing partials and version incompatibilities with both old and new Hugo versions. This is a known issue with this theme combination.

## Working Effectively

### Initial Setup and Dependencies
- Install Hugo extended version: `sudo apt-get update && sudo apt-get install -y hugo` (installs v0.123.7 on Ubuntu)
- Alternative: Download specific Hugo 0.111.3 (Netlify specified version):
  ```bash
  cd /tmp
  wget https://github.com/gohugoio/hugo/releases/download/v0.111.3/hugo_extended_0.111.3_linux-amd64.tar.gz
  tar -xzf hugo_extended_0.111.3_linux-amd64.tar.gz
  sudo cp hugo /usr/local/bin/hugo-0.111.3
  ```
- Go is pre-installed and required for Hugo modules

### Bootstrap and Build Process
- **Download modules**: `hugo mod get` -- takes 7 seconds on first run. NEVER CANCEL.
- **Build the site**: `hugo` -- currently FAILS due to theme compatibility issues

**CRITICAL BUILD ISSUES**: 
- Theme v5.9.0 with Hugo 0.123.7: `.File.UniqueID` template errors
- Theme v5.7.1 with Hugo 0.111.3: Missing partials AND image processing API changes
- **PARTIAL SUCCESS**: Basic site builds with Hugo 0.111.3 + theme v5.7.1 + stub partials + minimal content
- **PROJECTS FAIL**: Featured images break due to `.Fit`, `.Resize` image processing method changes
- Error: `<$featured.Fit>: Fit is not a method but has arguments` - extensive theme image processing issues

### Required Workarounds for Building

To make the site buildable, you MUST create missing theme partials:

```bash
mkdir -p layouts/partials/functions
```

Create `layouts/partials/functions/get_hook.html`:
```html
{{/* Stub for get_hook function - provides empty hook implementation */}}
{{- $hook := .hook -}}
{{- $context := .context -}}
{{/* Return empty string for all hooks */}}
```

Create `layouts/partials/functions/get_page_title.html`:
```html
{{/* Stub for get_page_title function - returns page title */}}
{{- $page_title := .Title -}}
{{- if not $page_title -}}
{{- $page_title = site.Title -}}
{{- end -}}
{{- return $page_title -}}
```

Create `layouts/partials/functions/get_featured_image.html`:
```html
{{/* Stub for get_featured_image function - returns featured image if available */}}
{{- $page := . -}}
{{- $featured_image := "" -}}
{{- if $page.Params.image -}}
{{- $featured_image = $page.Params.image -}}
{{- else if $page.Params.header.image -}}
{{- $featured_image = $page.Params.header.image -}}
{{- end -}}
{{- return $featured_image -}}
```

**Even with these workarounds, projects with featured images STILL FAIL due to extensive Hugo image processing API changes in theme templates (`$featured.Fit`, `$image.Resize`, etc.).**

### Current Build Status: PARTIALLY WORKING
- **Basic site builds successfully** with Hugo 0.111.3 + theme v5.7.1 + stub partials
- **Projects with featured images fail** due to image processing API incompatibilities
- **Development server works** for basic pages without image processing
- **Extensive theme template fixes required** for full functionality

### Development Server
- **Basic functionality works** with stub partials and minimal content
- Command: `hugo server --bind 0.0.0.0 --port 1313 --disableFastRender`
- **Hugo 0.111.3 required**: `/usr/local/bin/hugo-0.111.3 server --bind 0.0.0.0 --port 1313`
- **Fails with projects**: Projects containing featured images break the server due to image processing errors

### Deployment
- Configured for Netlify with Hugo 0.111.3
- Build command: `hugo --gc --minify -b $URL`
- **WARNING**: Netlify builds may also fail due to theme compatibility issues

## Validation
- **Basic site validation possible** with minimal content setup
- Validate by:
  - Checking homepage loads with stub content
  - Testing basic navigation and pages
  - Verifying development server starts
  - **Cannot test projects** due to image processing failures
- **Netlify static files**: Static files (PDFs, basic images) process correctly

## Common Tasks and Repository Structure

### Repository Root Structure
```
.
├── .github/           # GitHub workflows and funding config
├── config/            # Hugo configuration
│   └── _default/      # Site config, params, menus, languages
├── content/           # Site content (markdown files)
├── data/              # Site data files
├── layouts/           # Custom layout overrides (currently needed for workarounds)
├── static/            # Static assets
├── assets/            # Asset processing
├── go.mod             # Hugo modules definition
├── netlify.toml       # Netlify deployment config
└── theme.toml         # Theme metadata
```

### Key Configuration Files
- `config/_default/config.yaml` - Main Hugo config (site title: Giovanni Lion)
- `config/_default/params.yaml` - Theme parameters and styling
- `netlify.toml` - Specifies Hugo 0.111.3, build commands
- `go.mod` - Defines Wowchemy theme modules v5.7.1 → v5.9.0

### Timing Expectations
- `apt-get update`: ~10 seconds
- `apt-get install hugo`: ~62 seconds  
- `hugo mod get`: ~7 seconds (first time). NEVER CANCEL.
- `hugo` build: ~0.4-0.6 seconds when working
- Theme download: ~5-7 seconds. NEVER CANCEL.

### Hugo Module Management
- Current modules: Wowchemy v5, Netlify plugin, Reveal plugin
- Update modules: `hugo mod get -u`
- Clean cache: `hugo mod clean`

## IMPORTANT: Development Recommendations

**This site has PARTIAL FUNCTIONALITY - basic pages work but projects with images require theme fixes.**

**Before development work:**

1. **BASIC SITE WORKS**: Use Hugo 0.111.3 + theme v5.7.1 + stub partials for basic functionality
2. **PROJECT FIXES NEEDED**: Featured images in projects require extensive theme template updates
3. **Static files work correctly**: PDFs and basic assets process properly
4. **For full functionality**: Either fix image processing in theme templates or migrate to different theme

## Known Issues Summary
- **BASIC SITE BUILDS SUCCESSFULLY**: Works with Hugo 0.111.3 + theme v5.7.1 + stub partials
- **PROJECTS WITH IMAGES FAIL**: Theme image processing incompatible (`.Fit`, `.Resize` methods)
- Wowchemy theme v5.9.0 incompatible with Hugo 0.123.7 (`.File.UniqueID` errors)
- Missing theme partials resolved with stub functions
- Development server works for basic content
- **Netlify deployment possible** for basic site without projects
- Custom layouts in `layouts.backup/` contain incompatible overrides from theme evolution

**CONCLUSION: Site has basic functionality but needs image processing fixes for projects with featured images.**

Fixes #3.