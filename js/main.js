
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const content = item.nextElementSibling;
      const icon = item.querySelector('.faq__icon');

      const isOpen = content.style.display === 'block';

      document.querySelectorAll('.faq__content').forEach(c => c.style.display = 'none');
      document.querySelectorAll('.faq__icon').forEach(i => i.style.transform = 'rotate(0deg)');

      if (!isOpen) {
        content.style.display = 'block';
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });

