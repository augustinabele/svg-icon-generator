import axios from 'axios';

export async function fetchIconFromPrompt() {
  axios.post('https://europe-west1-scrypr.cloudfunctions.net/createSVG', {
    'prompt': 'dog',
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

const mockSvg = [
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM6.15 6l2.4 5h7l2.75-5ZM5.2 4h14.75q.575 0 .875.512q.3.513.025 1.038l-3.55 6.4q-.275.5-.738.775Q16.1 13 15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988q-.575-.987-.05-1.962L6.6 11.6L3 4H1V2h3.25Zm3.35 7h7Z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7.3 21q-.95 0-1.625-.688Q5 19.625 5 18.675V9.4L3.175 5H1V3h3.525l1.65 4H20.95q.575 0 .875.475q.3.475.025.975L19 14.025q1.275.2 2.138 1.175q.862.975.862 2.3q0 1.45-1.012 2.475Q19.975 21 18.525 21q-1.475 0-2.487-1.025q-1.013-1.025-1.013-2.475q0-.5.125-.925q.125-.425.35-.825l-3.275-.3l-3 4.5q-.325.5-.838.775Q7.875 21 7.3 21Zm.025-2.025q.05 0 .225-.125l2.425-3.6q-1.225-.125-1.925-.588Q7.35 14.2 7 13.7v5q0 .125.1.2q.1.075.225.075ZM18.5 19q.65 0 1.075-.438Q20 18.125 20 17.5q0-.65-.425-1.075Q19.15 16 18.5 16q-.625 0-1.062.425Q17 16.85 17 17.5q0 .625.438 1.062q.437.438 1.062.438Z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7.825 21H5V9.4L3.175 5H1V3h3.525l1.65 4h16.4L19 14.025q1.275.2 2.138 1.175q.862.975.862 2.3q0 1.45-1.012 2.475Q19.975 21 18.525 21q-1.475 0-2.487-1.025q-1.013-1.025-1.013-2.475q0-.5.125-.925q.125-.425.35-.825l-3.275-.3Zm9.025-7.125L19.325 9L7 9.025l1.725 4.1ZM7 13.7v5.275l2.975-3.725l-2.425-.225ZM18.5 19q.65 0 1.075-.438Q20 18.125 20 17.5q0-.65-.425-1.075Q19.15 16 18.5 16q-.625 0-1.062.425Q17 16.85 17 17.5q0 .625.438 1.062q.437.438 1.062.438Zm-1.65-5.125l-8.125-.75l8.125.75Z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7.825 21H5V9.4L3.175 5H1V3h3.525l1.65 4h16.4L19 14.025q1.275.2 2.138 1.175q.862.975.862 2.3q0 1.45-1.012 2.475Q19.975 21 18.525 21q-1.475 0-2.487-1.025q-1.013-1.025-1.013-2.475q0-.5.125-.925q.125-.425.35-.825l-3.275-.3Zm9.025-7.125L19.325 9L7 9.025l1.725 4.1ZM7 13.7v5.275l2.975-3.725l-2.425-.225ZM18.5 19q.65 0 1.075-.438Q20 18.125 20 17.5q0-.65-.425-1.075Q19.15 16 18.5 16q-.625 0-1.062.425Q17 16.85 17 17.5q0 .625.438 1.062q.437.438 1.062.438Zm-1.65-5.125l-8.125-.75l8.125.75Z"/></svg>',
];

// export const fetchIconFromPrompt = async (prompt: any) => {
//   console.log('fetch', prompt); 

//   const response = fetch('https://europe-west1-scrypr.cloudfunctions.net/createSVG', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     // body: '{"prompt" : "cat"}',
//     body: JSON.stringify({
//         'prompt': 'cat'
//     })
//   });

  // const json = response;
  // console.log('json', json);

  return mockSvg;
}
