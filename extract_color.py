from colorthief import ColorThief
import sys

try:
    color_thief = ColorThief(r'C:\Users\HP\CoachKarremOfficalWebsite\public\cutscendz.png')
    # get the dominant color
    dominant_color = color_thief.get_color(quality=1)
    
    # get a palette to see if there is a distinct purple if dominant isn't it
    palette = color_thief.get_palette(color_count=5)
    
    print(f"Dominant Color: {dominant_color}")
    print(f"Palette: {palette}")
    
    def rgb_to_hex(rgb):
        return '#%02x%02x%02x' % rgb

    print(f"Dominant Hex: {rgb_to_hex(dominant_color)}")
    for color in palette:
        print(f"Palette Hex: {rgb_to_hex(color)}")
        
except Exception as e:
    print(f"Error: {e}")
