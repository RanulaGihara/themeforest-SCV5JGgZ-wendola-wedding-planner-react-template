import React from 'react';
import CountDown from '@/components/elements/CountDown';

const Countdown1 = () => {
  const fixDate = new Date();
  return (
  <>
  <section className="countdown-section pt-0">
    <div className="auto-container">
      <div className="content-box wow fadeInUp">
        <div className="inner-column">
          <div className="image-box">
            <figure className="image"><img src="images/resource/countdown-1.jpg" alt=""/></figure>
            <div className="icon-box"><div className="icon-flowers-1"></div></div>
          </div>
          <div className="caption-box">
            <div className="text">Missing Days to Our Wedding</div>
            <span className="icon-divider"></span>
          </div>
        </div>
      </div>
      <div className="time-counter wow fadeInUp">
        <CountDown endDateTime={fixDate.setDate(fixDate.getDate() + 55)} />
      </div>
    </div>
  </section>
  </>
  );
};
export default Countdown1