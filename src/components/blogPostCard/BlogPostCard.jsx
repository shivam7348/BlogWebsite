import React, { useState, useContext, createContext } from 'react';
import { Button, Card, CardHeader, CardBody, CardFooter, Typography } from '@material-tailwind/react';

// Context Setup
const myContext = createContext();

const MyState = ({ children }) => {
  const [mode, setMode] = useState('light'); // Can be toggled to 'dark'

  return (
    <myContext.Provider value={{ mode, setMode }}>
      {children}
    </myContext.Provider>
  );
};

// CardDefault Component
function CardDefault() {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}

// BlogPostCard Component
function BlogPostCard() {
  const { mode } = useContext(myContext);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            {/* Blog Cards */}
            {[1, 2, 3].map((card, index) => (
              <div className="p-4 md:w-1/3 w-full" key={index}>
                <div
                  style={{
                    background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white',
                    borderBottom: mode === 'dark'
                      ? '4px solid rgb(226, 232, 240)'
                      : '4px solid rgb(30, 41, 59)',
                  }}
                  className={`h-full shadow-lg hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                     ${mode === 'dark' ? 'shadow-gray-700' : 'shadow-xl'}
                     rounded-xl overflow-hidden`}
                >
                  {/* Blog Thumbnail */}
                  <img
                    className="w-full"
                    src={
                      'https://firebasestorage.googleapis.com/v0/b/blog-fea71.appspot.com/o/blogimage%2FReact%20Introduction.png?alt=media&token=1ba7496b-2cbc-450c-ab1a-57e19882dc76'
                    }
                    alt="blog"
                  />

                  {/* Blog Content */}
                  <div className="p-6">
                    {/* Blog Date */}
                    <h2
                      className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                      style={{
                        color: mode === 'dark'
                          ? 'rgb(226, 232, 240)'
                          : 'rgb(30, 41, 59)',
                      }}
                    >
                      {'25 Sep 2023'}
                    </h2>

                    {/* Blog Title */}
                    <h1
                      className="title-font text-lg font-bold text-gray-900 mb-3"
                      style={{
                        color: mode === 'dark'
                          ? 'rgb(226, 232, 240)'
                          : 'rgb(30, 41, 59)',
                      }}
                    >
                      {'React Introduction'}
                    </h1>

                    {/* Blog Description */}
                    <p
                      className="leading-relaxed mb-3"
                      style={{
                        color: mode === 'dark'
                          ? 'rgb(226, 232, 240)'
                          : 'rgb(30, 41, 59)',
                      }}
                    >
                      Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Include Material Tailwind Card */}
            <div className="p-4 md:w-1/3 w-full">
              <CardDefault />
            </div>
          </div>

          {/* See More Button */}
          <div className="flex justify-center my-5">
            <Button
              style={{
                background: mode === 'dark'
                  ? 'rgb(226, 232, 240)'
                  : 'rgb(30, 41, 59)',
                color: mode === 'dark'
                  ? 'rgb(30, 41, 59)'
                  : 'rgb(226, 232, 240)',
              }}
            >
              See More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// App Component
function App() {
  return (
    <MyState>
      <BlogPostCard />
    </MyState>
  );
}

export default App;
