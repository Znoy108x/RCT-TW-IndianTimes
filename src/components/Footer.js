import React from 'react';

const Footer = () => {
  return (
  <>
      <footer class="bg-gray-800 text-white w-full h-[150px]">
        <h1 class="ml14 text-center my-6">
            <span class="text-wrapper">
              <span class="letters">© 2022–23 Abhay Bisht</span>
              <span class="line"></span>
            </span>
          </h1>
        <div class="flex flex-wrap space-x-5 justify-center  children:">
            <a href="https://www.youtube.com/channel/UCugIZ91q6x0MpXSHB0W2InA" class="hover:text-indigo-500 hover:scale-95">YouTube</a>
            <a href="https://twitter.com/2002ABHaYBISHT" class="hover:text-indigo-500 hover:scale-95">Twitter</a>
            <a href="https://www.instagram.com/og_starlord/?hl=en" class="hover:text-indigo-500 hover:scale-95">Instagram</a>
            <a href="https://www.linkedin.com/in/abhay-bisht-042662177/ " class="hover:text-indigo-500 hover:scale-95">Linked In</a>
            <a href="https://github.com/AbHaY108BiShT?tab=repositories" class="hover:text-indigo-500 hover:scale-95">Git Hub</a>
        </div>
        <h1 class="ml12 text-center mt-3">
            ❤️ Happy Learning!
        </h1>
    </footer>
  </>
  )
};

export default Footer;