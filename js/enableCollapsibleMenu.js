function enableCollapsibleMenu() {
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      const currentSubmenu = document.querySelector(
        `.${item.getAttribute('href').substring(1)}-submenu`
      );
      const allSubmenus = document.querySelectorAll('.collapse');
      allSubmenus.forEach((submenu) => {
        if (submenu !== currentSubmenu) {
          submenu.classList.remove('show');
        }
      });
    });
  });
}

enableCollapsibleMenu();
