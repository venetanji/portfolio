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
- Theme v5.7.1 with Hugo 0.111.3: Missing partials AND `.Fit` method errors on image processing
- Both combinations require extensive theme fixes beyond simple partial stubs
- Error: `<$featured.Fit>: Fit is not a method but has arguments` - indicates deeper Hugo image processing API changes

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

**Even with these workarounds, the build STILL FAILS due to Hugo image processing API changes (`$featured.Fit` method removed in newer Hugo versions).**

### Current Build Status: BROKEN
- **Build fails with both Hugo 0.111.3 and 0.123.7**
- **Development server fails with same errors**
- **Theme requires major updates to work with any current Hugo version**
- **Manual theme patching required beyond scope of simple fixes**

### Development Server
- **DO NOT ATTEMPT** to run the development server - it fails with same build errors
- Command would be: `hugo server --bind 0.0.0.0 --port 1313 --disableFastRender`
- **CONFIRMED BROKEN**: Server fails with `$featured.Fit` image processing errors

### Deployment
- Configured for Netlify with Hugo 0.111.3
- Build command: `hugo --gc --minify -b $URL`
- **WARNING**: Netlify builds may also fail due to theme compatibility issues

## Validation
- **CANNOT CURRENTLY VALIDATE** the site due to build failures
- Once build works, validate by:
  - Checking homepage loads
  - Navigating through portfolio sections
  - Verifying responsive design
  - Testing contact form functionality

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

**This site is currently BROKEN and cannot be built or run locally due to theme incompatibilities.**

**Before any development work:**

1. **THEME MIGRATION REQUIRED**: The Wowchemy Academic theme is incompatible with current Hugo versions
2. **Consider alternative approaches**:
   - Migrate to a different Hugo theme (recommended)
   - Fork and fix the Wowchemy theme (time-intensive)
   - Use a different static site generator entirely
3. **If attempting theme fixes**:
   - Image processing methods changed between Hugo versions
   - Multiple template partial functions missing
   - Extensive Hugo template API changes need addressing
4. **Netlify deployment will also fail** with same errors

**This repository cannot be used for development until the theme compatibility crisis is resolved.**

## Known Issues Summary
- **SITE BUILD COMPLETELY BROKEN**: Cannot build with any Hugo version tested
- Wowchemy theme v5.9.0 incompatible with Hugo 0.123.7 (`.File.UniqueID` errors)
- Wowchemy theme v5.7.1 incompatible with Hugo 0.111.3 (`.Fit` method removed, missing partials)
- Hugo image processing API changes broke theme image handling
- Development server fails with same errors as static build
- Netlify deployment will fail until theme is fixed or replaced
- Custom layouts in `layouts.backup/` contain incompatible overrides from theme evolution

**CONCLUSION: This site requires complete theme replacement or extensive theme renovation before any development work can proceed.**

Fixes #3.