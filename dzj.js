  const text = "追吻辰星，追逐自己的光芒，亲吻属于自己的那一片辰星";
    const typingEffect = document.getElementById('typingEffect');
    let index = 0;

    function type() {
      if (index < text.length) {
        typingEffect.textContent += text[index];
        index++;
        setTimeout(type, 250);
      }
    }

    type();
