"use client";
import { useRef } from "react";

export default function TimeTag({
  time,
  content,
}: {
  time: string;
  content: string;
}) {
  
  return (
      <div className="etag-timeline">
        <div className="etag-timeline-item">
          <div className="etag-timeline-item-title">
            <div className="etag-timeline-item-circle">
              <p>{time}</p>
            </div>
          </div>
        <div className="etag-timeline-item-content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
