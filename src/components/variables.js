const screens = {
  mobile: 320,
  mobileL: 480,
  pad: 768,
  desktop: 1280
}

export const variables = {
  firstColors: {
    primarycolor: '#0111ea',
    subcolor: '#4d9aff',
    redcolor: '#DF0101'
  },
  secondaryColors: {
    lightgray: '#F2F2F2',                     //Фон для блоков новостей и каталога
    mediumgray: '#d9d9d9',                    //Цвет для рамок карточек
    titlegray: '#666',                        // Цвет для заголовков страниц
    textgray: '#333'                          // Цвет ля текста и вторичных заголовков
  },
  bgcolor: '#edeef0',                         //Фон на сайте
  borderColor: '#d9d9d9',                     //цвет границ
  font: '"Roboto", Tahoma, sans-serif;',
  fontTitle: '"Roboto Slab", Tahoma, serif;'
}

export const device = {
  mobile: `(max-width: ${screens.pad - 1}px )`,
  mobileL: `(max-width: ${screens.mobileL}px )`,
  pad: `(min-width: ${screens.pad}px ) and (max-width: ${screens.desktop - 1}px )`,
  desktop: `(min-width: ${screens.desktop}px )`
};
