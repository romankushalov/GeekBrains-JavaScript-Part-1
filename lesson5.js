function rgb2hex(red, green, blue) {var rgb = blue | (green << 8) | (red << 16);return '#' + (0x1000000 + rgb).toString(16).slice(1)}
