import { PAGED_API_RECEIVED } from './types';

const defaultParams = {
  // The index which this page begins from in the whole items on server side/db dependent on the API order
  pageFromIndex: 0,
  //  The index which this page end from in the whole items on server side/db dependent on the API order
  pageToIndex: 0,
  // The total number of items in the db in the query
  totalItemsCount: 0,
  // The index on which this page falls on after in the number of pages
  pageIndex: 0,
  // Keeps record of the page index to send to the API
  actionPageIndex: 1,
  // Number of Items on the Page
  noPerPage: 10,
  // Number of Pages Calculated
  noOfPages: 0,
  // Number of Pages Labels to display at a time
  noOfPageLinks: 3,
  // The group currently shown
  pageLinkGroup: 1,
  // The Sort direction sent to the API
  sortDirection: 'asc',
  // The feild to sort the query by
  sortFeild: 'name',
  // String to filter the list
  filterString: encodeURI(`{"filter_string": "${''}"}`),
};

const initialParams = () => {
  const params = Object.assign({}, defaultParams);
  delete params.noPerPage;
  return Object.assign({ noPerPage: 100 }, params);
};

const pagedAPISuccess = (returnedCount, apiTotalCount, oldParams) => {
  apiTotalCount = Number.parseInt(apiTotalCount, 10);
  const newParams = Object.assign({}, oldParams);
  // API response Dependent Changes
  newParams.pageIndex = oldParams.actionPageIndex;
  newParams.noOfPages = Math.trunc(apiTotalCount / oldParams.noPerPage)
    + (((apiTotalCount % oldParams.noPerPage) > 0) ? 1 : 0);
  newParams.pageFromIndex = apiTotalCount ? ((newParams.pageIndex * newParams.noPerPage)
    - newParams.noPerPage + 1) : 0;
  newParams.pageToIndex = (newParams.pageIndex * newParams.noPerPage)
    - (newParams.noPerPage - returnedCount);
  newParams.totalItemsCount = apiTotalCount;
  return { type: PAGED_API_RECEIVED, paginateParams: newParams };
};

const pagedAPI = pageParams => dispatch => dispatch(pagedAPISuccess(pageParams));

export {
  pagedAPI,
  pagedAPISuccess,
  initialParams,
  defaultParams,
};
