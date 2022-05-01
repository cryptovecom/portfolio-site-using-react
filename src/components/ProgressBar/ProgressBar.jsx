import { useEffect, useState } from 'react';
import './progress-bar.css';

export const ProgressBar = () => {
  let body = document.body;
  let html = document.documentElement;

  const [height, setHeight] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleScroll() {
    html.style.setProperty('--progress-width', `${(window.pageYOffset / height) * 100}%`);
  }

  useEffect(() => {
    let clientHeight = html.clientHeight;
    let scrollHeight = Math.max(body.scrollHeight, html.scrollHeight);
    setHeight(scrollHeight-clientHeight);
    window.addEventListener('scroll', handleScroll);
  }, [html.clientHeight, html.scrollHeight, body.scrollHeight, handleScroll]);

  return (
    <div className="progress-bar">
      <div className="progress-bar__progress"></div>
      {/* {console.log(`scrollHeight: `, height)} */}
    </div>
  )  
}