import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="container pt-5 pb-3">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className='text-center'> Question and Answer </h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid  pb-4">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How does react work ?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className='text-secondary'>
                                            ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.At its very core, React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes.
                                        </p>
                                        <p className='text-secondary'>
                                            Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Difference between Props and State ?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div>
                                            <span className="fw-bold">Props:- </span>
                                            <p className="text-secondary"> <span className="fw-semibold">What is Props:</span> Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.</p>

                                        </div>
                                        <div>
                                            <span className="fw-bold">State:- </span>
                                            <p className="text-secondary"> <span className="fw-semibold">What is State:</span> The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What is useEffect used for ?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                       <p className='text-secondary'>
                                       By using this Hook, you tell React that your component needs to do something after rendering. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.
                                       </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;