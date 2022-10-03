import { getConfig as fetchConfig } from 'Api';

let base_url = localStorage.getItem('base_url');

export const buildPreviewLink = (file: string) => `${base_url}w500${file}`;

export const buildPosterLink = (file: string) => `${base_url}original${file}`;

export const initConfig = async () => {
  const config = await fetchConfig();

  if (base_url === config.images.base_url) {
    return;
  }

  localStorage.setItem('base_url', config.images.base_url);
  base_url = config.images.base_url;
};

export const formatMoney = (amount: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(amount);
};
