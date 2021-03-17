from PIL import Image, ImageDraw, ImageFont

colours = {
    "0": (0, 0, 0),
    "1": (0, 0, 170),
    "2": (0, 170, 0),
    "3": (0, 170, 170),
    "4": (170, 0, 0),
    "5": (170, 0, 170),
    "6": (255, 170, 0),
    "7": (170, 170, 170),
    "8": (85, 85, 85),
    "9": (85, 85, 255),
    "a": (85, 255, 85),
    "b": (85, 255, 255),
    "c": (255, 85, 85),
    "d": (255, 85, 255),
    "e": (255, 255, 85),
    "f": (255, 255, 255)
}


def render_mc(draw, text, position, size=18):
    font = ImageFont.truetype("./assets/minecraft.ttf", size)
    parts = text.split("&")[1::]
    x = position[0]
    y = position[1]
    for part in parts:
        p = part[0]
        if p in colours:
            draw.text((x, y), part[1::], font=font, fill=colours[p])
            width, _ = font.getsize(part[1::])
            x += width
        
    
