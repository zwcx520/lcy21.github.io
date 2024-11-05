  const text = "我什么都没忘，只是有些事只适合收藏。";
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
