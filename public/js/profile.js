const newFormHandler = async (event) => {
    event.preventDefault();
  
    const blog_name = document.querySelector('#blog-name').value.trim();
    const blog_desc = document.querySelector('#blog-desc').value.trim();
    const blog_links = document.querySelector('#blog-links').value.trim();
    const related_topics = document.querySelector('#related-topics').value.trim();
  
    if (blog_name && blog_desc && blog_links && related_topics) {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({ blog_name, blog_desc, blog_links, related_topics }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to post entry');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete blog entry');
      }
    }
  };
  
  document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);
  