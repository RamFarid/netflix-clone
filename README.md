# Netflix clone

This website is a real example of my ability to clone any UI. For me, based on my new skills in React at the time, this website was a challenge for myself to implement.  
**Netflix Clone** is an **exact copy** of the current Netflix website for the month of October 2022  
The project is clone for UI and all front end logics

## Sources of data

Since there is no backend I had to find a workaround for the backend. To have a solution we need to know what the problem is  
So let me explain why we need the back end and how I came up with a solution to replace it.

| SB                                                                         | Solution                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| We need a source of videos with a perfect recommendation system            | I find `**tmdb API**` acts as a videos source                                                                                                                                                                                                               |
| We need Authentication for every user                                      | I neglected this feature and made a Static email stored as a normal variables. Email: **workprojects22@gmail.com** Password: **123456** It's not the best solution but as I mentioned at this time it was my skills which was limited to the front end only |
| There is a list page that the user can add a movie or TV show in this list | I made this feature but the videos immediately appear after added and disappeared when reload                                                                                                                                                               |

By the previous points I could replace the needing of the backend.  
I expect this proves that I can handle data if I have a real backend, not just a experimental API

## Learning outcomes

- Deals with axios
- The real usages of useRef
- React Context API
- Custom Hooks
