/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      // Or if using `src` directory:
      './src/**/*.{js,ts,jsx,tsx}',
      './node_modules/flowbite-react/**/*.js',
   ],
   theme: {
      extend: {
         backgroundPosition: {
            'bottom-1': 'center bottom 20%',
         },
         backgroundSize: {
            128: '32rem',
         },
         backgroundImage: {
            trucking:
               "url('https://images.unsplash.com/photo-1473445730015-841f29a9490b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')",
            trucking2:
               "url('https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            trucking3:
               "url('https://images.unsplash.com/photo-1547319784-330d3b12b3bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80)",
            trucking4:
               "url('https://images.pexels.com/photos/7019379/pexels-photo-7019379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
         },
      },
   },
   plugins: [require('flowbite/plugin')],
};
