const roomLength1 = prompt('Укажите длину первой комнаты в метрах')
const roomWidth1 = prompt('Укажите ширину первой комнаты в метрах')
const roomLength2 = prompt('Укажите длину второй комнаты в метрах')
const roomWidth2 = prompt('Укажите ширину второй комнаты в метрах')
const roomsArea = roomLength1 * roomWidth1 + roomLength2 * roomWidth2
alert(`Площадь двух комнат ${roomsArea} (м2)`)
