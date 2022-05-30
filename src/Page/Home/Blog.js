import React from 'react';

const Blog = () => {
     return (
          <div className='lg:px-12 p-4 py-12'>
               <h1 className='text-center text-secondary text-2xl font-bold uppercase py-16 '>Here are the answers to the questions</h1>
               <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-10'>

                    <div>
                         <div className="collapse  shadow-xl rounded-lg collapse-plus">
                              <input type="checkbox" className="peer " />
                              <div className="collapse-title text-4xl font-bold text-neutral-focus-content peer-checked:bg-white peer-checked:text-neutral-focus-content">
                                   <h1 className='text-xl'>How will you improve the performance of a React Application?</h1>
                              </div>
                              <div className="collapse-content bg-base-200  text-primary-content peer-checked:bg-base-primary peer-checked:text-primary-content">
                                   <ol>
                                        <li>
                                             1  Keeping component state local where necessary.
                                        </li>
                                        <li>
                                             2  Memoizing React components to prevent unnecessary re-renders.
                                        </li>
                                        <li>
                                             3  Code-splitting in React using dynamic import()
                                        </li>
                                        <li>
                                             4  Windowing or list virtualization in React.
                                        </li>
                                        <li>
                                             5  Lazy loading images in React.
                                        </li>

                                   </ol>
                              </div>
                         </div>
                    </div>

                    <div>
                         <div className="collapse  shadow-xl rounded-lg collapse-plus">
                              <input type="checkbox" className="peer " />
                              <div className="collapse-title text-4xl font-bold text-neutral-focus-content peer-checked:bg-white peer-checked:text-neutral-focus-content">
                                   <h1 className='text-xl'>What are the different ways to manage a state in a React application?</h1>
                              </div>
                              <div className="collapse-content bg-base-200  text-primary-content peer-checked:bg-base-200 peer-checked:text-primary-content">
                                   <ul>
                                        <li>
                                             1   Local state.
                                        </li>
                                        <li>
                                             2   Global state
                                        </li>
                                        <li>
                                             3  Server state
                                        </li>
                                        <li>
                                             4 URL state
                                        </li>

                                   </ul>
                              </div>
                         </div>
                    </div>

                    <div>
                         <div className="collapse  shadow-xl rounded-lg collapse-plus">
                              <input type="checkbox" className="peer " />
                              <div className="collapse-title text-4xl font-bold text-neutral-focus-content peer-checked:bg-white peer-checked:text-neutral-focus-content">
                                   <h1 className='text-xl'>Why you do not set the state directly in React. and Whay do not set</h1>
                              </div>
                              <div className="collapse-content bg-base-200  text-primary-content peer-checked:bg-base-200 peer-checked:text-primary-content">
                                   <p>When you directly update the state, it does not change this. state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components.</p>
                              </div>
                         </div>
                    </div>

                    <div>
                         <div className="collapse  shadow-xl rounded-lg collapse-plus">
                              <input type="checkbox" className="peer " />
                              <div className="collapse-title text-4xl font-bold text-neutral-focus-content peer-checked:bg-white peer-checked:text-neutral-focus-content">
                                   <h1 className='text-xl'>How does prototypical inheritance work?</h1>
                              </div>
                              <div className="collapse-content bg-base-200  text-primary-content peer-checked:bg-base-200 peer-checked:text-primary-content">
                                   <p> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.s</p>
                              </div>
                         </div>
                    </div>

                    <div>
                         <div className="collapse  shadow-xl rounded-lg collapse-plus">
                              <input type="checkbox" className="peer " />
                              <div className="collapse-title text-4xl font-bold text-neutral-focus-content peer-checked:bg-white peer-checked:text-neutral-focus-content">
                                   <h1 className='text-xl'>What is a unit test? Why should write unit tests??</h1>
                              </div>
                              <div className="collapse-content bg-base-200  text-primary-content peer-checked:bg-base-200 peer-checked:text-primary-content">
                                   <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
                              </div>
                         </div>
                    </div>
                    {/* 
                    <div>
                         <div className="collapse  shadow-xl rounded-lg collapse-plus">
                              <input type="checkbox" className="peer " />
                              <div className="collapse-title text-4xl font-bold text-neutral-focus-content peer-checked:bg-white peer-checked:text-neutral-focus-content">
                                   <h1 className='text-xl'>How will you improve the performance of a React Application?</h1>
                              </div>
                              <div className="collapse-content bg-base-200  text-primary-content peer-checked:bg-base-200 peer-checked:text-primary-content">
                                   <p>tabindex="0" attribute is necessary to make the div focusable</p>
                              </div>
                         </div>
                    </div>
 */}

               </div>
          </div>
     );
};

export default Blog;