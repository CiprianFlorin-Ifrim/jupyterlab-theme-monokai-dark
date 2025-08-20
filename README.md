# JupyterLab Monokai Dark Theme

A beautiful dark theme for JupyterLab inspired by the classic Monokai color scheme with vibrant syntax highlighting and neutral grey backgrounds that are easy on the eyes.



## Features

- 🎨 **Authentic Monokai Colors**: Classic syntax highlighting with vibrant colors
- 👁️ **Eye-Friendly**: Neutral dark grey backgrounds instead of harsh greens
- ⚡ **JupyterLab 4+ Compatible**: Built for the latest JupyterLab versions
- 🖥️ **Consistent**: Uniform styling across all JupyterLab components

## Color Palette

- **Background**: `#2D2D30` - Neutral dark grey
- **Keywords**: `#F92672` - Monokai pink
- **Strings**: `#E6DB74` - Monokai yellow  
- **Numbers**: `#AE81FF` - Monokai purple
- **Functions**: `#A6E22E` - Monokai green
- **Builtins**: `#66D9EF` - Monokai blue
- **Comments**: `#75715E` - Monokai grey
- **Text**: `#F8F8F2` - Monokai white

## Installation

### Method 1: pip install (Recommended)
```bash
pip install jupyterlab-theme-monokai-dark
```

### Method 2: Development Install
```bash
git clone https://github.com/CiprianFlorin-Ifrim/jupyterlab-theme-monokai-dark.git
cd jupyterlab-theme-monokai-dark
pip install -e .
```

## Usage

1. Install the theme using one of the methods above
2. Restart JupyterLab completely
3. Go to **Settings** → **Theme** → **Monokai Dark**

## Development

### Prerequisites
- JupyterLab 4.0+
- Node.js (for building)
- Python 3.8+

### Setup
```bash
# Clone the repository
git clone https://github.com/CiprianFlorin-Ifrim/jupyterlab-theme-monokai-dark.git
cd jupyterlab-theme-monokai-dark

# Install dependencies
jlpm install

# Build the extension
jlpm run build

# Install in development mode
jupyter labextension develop . --overwrite

# Watch for changes (in development)
jlpm run watch
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the BSD-3-Clause License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Original Monokai color scheme by [Wimer Hazenberg](http://www.monokai.nl/)
- Based on the Darcula theme structure by [Max Klein](https://github.com/telamonian/theme-darcula)
- JupyterLab team for the amazing platform

## Screenshots

### Python Code
```python
def fibonacci(n):
    """Generate Fibonacci sequence up to n terms"""
    a, b = 0, 1
    for i in range(n):
        if i <= 1:
            yield i
        else:
            yield a + b
            a, b = b, a + b

# Test the function
for num in fibonacci(10):
    print(f"Fibonacci: {num}")
```

### Markdown and Data
Beautiful rendering of markdown cells, dataframes, and outputs with consistent Monokai styling.

---

⭐ **Star this repo** if you enjoy the theme!