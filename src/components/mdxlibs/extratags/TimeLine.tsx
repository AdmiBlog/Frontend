"use client";
import { ReactElement } from "react";

export default function TimeLineTag({
  children,
  time,
  color,
}: {
  children: ReactElement[] | ReactElement;
  time: string;
  color?: string;
}) {
  
  return (
    <div className={`etag-timeline${color?" "+color:""}`}>
      <div className="timeline-item">
        <div className="timeline-item-title">
          <div className="item-circle">
            <p>{time}</p>
          </div>
        </div>
        <div className="timeline-item-content">
          {children}
        </div>
      </div>
    </div>
  );
}
