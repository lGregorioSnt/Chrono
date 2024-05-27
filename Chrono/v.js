function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
  }
  
  document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);
  
  screenTop