// import { useEffect, useRef } from "react";
// import "./styles/WhatIDo.css";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const WhatIDo = () => {
//   const containerRef = useRef<(HTMLDivElement | null)[]>([]);
//   const setRef = (el: HTMLDivElement | null, index: number) => {
//     containerRef.current[index] = el;
//   };
//   useEffect(() => {
//     if (ScrollTrigger.isTouch) {
//       containerRef.current.forEach((container) => {
//         if (container) {
//           container.classList.remove("what-noTouch");
//           container.addEventListener("click", () => handleClick(container));
//         }
//       });
//     }
//     return () => {
//       containerRef.current.forEach((container) => {
//         if (container) {
//           container.removeEventListener("click", () => handleClick(container));
//         }
//       });
//     };
//   }, []);
//   return (
//     <div className="whatIDO">
//       <div className="what-box">
//         <h2 className="title">
//           W<span className="hat-h2">HAT</span>
//           <div>
//             I<span className="do-h2"> DO</span>
//           </div>
//         </h2>
//       </div>
//       <div className="what-box">
//         <div className="what-box-in">
//           <div className="what-border2">
//             <svg width="100%">
//               <line
//                 x1="0"
//                 y1="0"
//                 x2="0"
//                 y2="100%"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeDasharray="7,7"
//               />
//               <line
//                 x1="100%"
//                 y1="0"
//                 x2="100%"
//                 y2="100%"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeDasharray="7,7"
//               />
//             </svg>
//           </div>
//           <div
//             className="what-content what-noTouch"
//             ref={(el) => setRef(el, 0)}
//           >
//             <div className="what-border1">
//               <svg height="100%">
//                 <line
//                   x1="0"
//                   y1="0"
//                   x2="100%"
//                   y2="0"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeDasharray="6,6"
//                 />
//                 <line
//                   x1="0"
//                   y1="100%"
//                   x2="100%"
//                   y2="100%"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeDasharray="6,6"
//                 />
//               </svg>
//             </div>
//             <div className="what-corner"></div>

//             <div className="what-content-in">
//               <h3>FRONT-END DEVELOPMENT</h3>
//               <h4>Interactive & Responsive UI</h4>
//               <p>
//                 Specializing in building high-quality, responsive, and dynamic user interfaces using modern web technologies to drive business growth.
//               </p>
//               <h5>Skillset & tools</h5>
//               <div className="what-content-flex">
//                 <div className="what-tags">HTML5 &amp; CSS3</div>
//                 <div className="what-tags">JavaScript (ES6+)</div>
//                 <div className="what-tags">React.js</div>
//                 <div className="what-tags">Tailwind CSS</div>
//                 <div className="what-tags">Framer Motion</div>
//                 <div className="what-tags">Bootstrap</div>
//               </div>
//               <div className="what-arrow"></div>
//             </div>
//           </div>
//           <div
//             className="what-content what-noTouch"
//             ref={(el) => setRef(el, 1)}
//           >
//             <div className="what-border1">
//               <svg height="100%">
//                 <line
//                   x1="0"
//                   y1="100%"
//                   x2="100%"
//                   y2="100%"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeDasharray="6,6"
//                 />
//               </svg>
//             </div>
//             <div className="what-corner"></div>
//             <div className="what-content-in">
//               <h3>WEB APPLICATIONS</h3>
//               <h4>Scalable & Maintainable Architecture</h4>
//               <p>
//                 Developing robust front-end web applications with clean, maintainable, and optimized code, integrating closely with back-end systems.
//               </p>
//               <h5>Skillset & tools</h5>
//               <div className="what-content-flex">
//                 <div className="what-tags">State Management</div>
//                 <div className="what-tags">Responsive Design</div>
//                 <div className="what-tags">API Integration</div>
//                 <div className="what-tags">Performance Optimization</div>
//                 <div className="what-tags">WordPress</div>
//                 <div className="what-tags">Theme Customization</div>
//                 <div className="what-tags">PHP Hooks</div>
//               </div>
//               <div className="what-arrow"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatIDo;

// function handleClick(container: HTMLDivElement) {
//   container.classList.toggle("what-content-active");
//   container.classList.remove("what-sibling");
//   if (container.parentElement) {
//     const siblings = Array.from(container.parentElement.children);

//     siblings.forEach((sibling) => {
//       if (sibling !== container) {
//         sibling.classList.remove("what-content-active");
//         sibling.classList.toggle("what-sibling");
//       }
//     });
//   }
// }

import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* CARD 1: FRONT-END DEVELOPMENT (Focusing on React, UI, & Animations) */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>FRONT-END DEVELOPMENT</h3>
              <h4>Interactive, Motion-Rich & Responsive UI</h4>
              <p>
                Specializing in building high-performance single-page
                applications using the React ecosystem. Expert in creating fluid
                user interfaces with micro-interactions, complex fluid
                animations, and pixel-perfect layouts that work flawlessly
                across all devices.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">React 19</div>
                <div className="what-tags">JavaScript (ES6+)</div>
                <div className="what-tags">Tailwind CSS 4</div>
                <div className="what-tags">Framer Motion</div>
                <div className="what-tags">HTML5 &amp; CSS3</div>
                <div className="what-tags">Vite</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* CARD 2: WEB APPLICATIONS & CMS (Focusing on Logic, Dashboards & CMS solutions) */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>WEB APPLICATIONS &amp; CMS</h3>
              <h4>Scalable Dashboards &amp; Client-Ready Solutions</h4>
              <p>
                Developing logic-driven web apps featuring global state
                management, role-based user authentication, and persistent
                storage. Adept at customizing high-converting e-commerce
                components and delivering structured, dynamic WordPress
                environments.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Context API</div>
                <div className="what-tags">User Auth &amp; Dashboard</div>
                <div className="what-tags">E-Commerce Logic</div>
                <div className="what-tags">WordPress / PHP Hooks</div>
                <div className="what-tags">Git &amp; GitHub</div>
                <div className="what-tags">ESLint Quality</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
