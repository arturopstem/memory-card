import { useEffect } from 'react';
import { Slide, toast } from 'react-toastify';

const baseUrl = 'https://ddragon.leagueoflegends.com';
let version;

function delay(ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

export function useFetchChampions(setChampionsData) {
  useEffect(() => {
    let ignore = false;

    async function fetchChampionsData() {
      try {
        const versionsUrl = `${baseUrl}/api/versions.json`;
        const versionsResponse = await fetch(versionsUrl);

        if (!ignore) {
          await delay(500);
          const versionsData = await versionsResponse.json();
          [version] = versionsData;

          const championsPath = `/cdn/${version}/data/en_US/champion.json`;
          const championsUrl = `${baseUrl}${championsPath}`;
          const championsResponse = await fetch(championsUrl);
          const championsData = await championsResponse.json();

          setChampionsData(championsData);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchChampionsData();

    return () => (ignore = true);
  }, [setChampionsData]);
}

export function getImgUrl(id) {
  const loadingImgPath = `${baseUrl}/cdn/img/champion/loading`;
  const imgUrl = `${loadingImgPath}/${id}_0.jpg`;

  return imgUrl;
}

const toastConfig = {
  position: 'bottom-right',
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: 'dark',
  transition: Slide,
};

export function useToast(controller) {
  useEffect(() => {
    let ignore = false;

    setTimeout(() => {
      if (!ignore) {
        if (controller.feedback) {
          const { status, message } = controller.feedback;

          switch (status) {
            case 'playing':
              toastConfig.autoClose = 1000;
              toast.info(message, toastConfig);
              break;
            case 'lose':
              toastConfig.autoClose = 2000;
              toast.error(message, toastConfig);
              break;
            case 'win':
              toastConfig.autoClose = 3000;
              toast.success(message, toastConfig);
              break;
          }
        }
      }
    }, 0);

    return () => (ignore = true);
  }, [controller]);
}
