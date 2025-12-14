'use client';

import { useState } from 'react';

import blogData_58 from '../../_assets/data/blogData.json';
import Blog2_58 from '../../_components/Blog2_58';
import Wrapper from '../../_assets/wrapper/Blog2_58';
import Alert_58 from '../../_components/Alert_58';

const BlogLocalJsonPage2_58 = () => {
  const [name, setName] = useState('clw');
  const [id, setId] = useState(213410458);
  const [blogs_58, setBlogs_58] = useState(blogData_58);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs_58(blogs_58.filter((blog) => blog.id !== id));
  };

  const clearAllBlogs = () => {
    showAlert(true, 'clear all blogs', 'danger');
    setBlogs_58([]);
  };

  const loadAllBlogs = () => {
    showAlert(true, 'load all blogs', 'success');
    setBlogs_58([]);
    setBlogs_58(blogData_58);
  };

  return (
    <Wrapper>
      {alert.show && <Alert_58 alert={alert} showAlert={showAlert} />}
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from local json 2 -- {name}, {id}{' '}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs_58.map((item) => {
            const { id, title, descrip, category, img } = item;
            return (
              <Blog2_58
                key={id}
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={img}
                removeItem={removeItem}
              />
            );
          })}
        </div>
        <div className='flex justify-center items-center gap-8 mt-8'>
          <button
            type='button'
            className='text-red-700 bg-red-200 hover:bg-red-300 capitalize px-4 py-2 text-base rounded'
            onClick={clearAllBlogs}
          >
            clear all blogs
          </button>
          <button
            type='button'
            className='text-blue-700 bg-blue-200 hover:bg-blue-300 capitalize px-4 py-2 text-base rounded'
            onClick={loadAllBlogs}
          >
            load all blogs
          </button>
        </div>
      </section>
    </Wrapper>
  );
};

export default BlogLocalJsonPage2_58;
