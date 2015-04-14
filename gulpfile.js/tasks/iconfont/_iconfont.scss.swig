{{comment}}

@font-face {

  font-family: '{{ fontName }}';
  src: url('{{ fontPath }}{{ fontName }}.eot');
  src: url('{{ fontPath }}{{ fontName }}.eot?#iefix') format('eot'),
  url('{{ fontPath }}{{ fontName }}.woff') format('woff'),
  url('{{ fontPath }}{{ fontName }}.ttf') format('truetype'),
  url('{{ fontPath }}{{ fontName }}.svg#{{ fontName }}') format('svg');

}

.icon {

  font-family: '{{ fontName }}';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: 1;
  position: relative;
  text-decoration: none;
  text-transform: none;
  {% for icon in icons %}
  &--{{ icon.name }}:before { content: '\{{ icon.code }}'; }
  {% endfor %}
}
