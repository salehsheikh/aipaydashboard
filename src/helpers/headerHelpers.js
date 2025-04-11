import { headerTitles, statuses, statusFilters } from '../app/constants/constant';

export const getFilteredStatuses = (activeTab) => {
  return statusFilters[activeTab] || statuses;
};

export const getHeaderTitle = (activeTab) => {
  return headerTitles[activeTab] || 'Header Title';
};