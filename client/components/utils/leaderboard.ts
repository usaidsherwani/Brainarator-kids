/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
// #region interfaces imports
import { ILeaderBoardUsers, ILeaderboardBadge } from 'client/interfaces/pages/auth';

export const getBadgeNameFromLeaderboardData = (data: ILeaderBoardUsers) => {
  return data?.badges && data?.badges[data?.badges?.length - 1]
    ? data?.badges[data?.badges?.length - 1]
    : 'Brainitiator';
};

export const isFound = (data: string, searchedString: string) => {
  if (data?.toLowerCase()?.includes(searchedString?.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

export const leaderboardSearchFilter = (
  searchedString: string,
  userData: ILeaderBoardUsers[],
  selectedBadges?: ILeaderboardBadge[]
) => {
  const filteredData: ILeaderBoardUsers[] = [];
  userData?.filter((user: ILeaderBoardUsers) => {
    if (searchedString !== '') {
      if (selectedBadges && selectedBadges.length > 0) {
        selectedBadges.map((badge: ILeaderboardBadge) => {
          if (
            getBadgeNameFromLeaderboardData(user)
              ?.toLowerCase()
              .includes(badge.label || '')
          ) {
            if (
              isFound(user?.firstName, searchedString) ||
              isFound(user?.lastName, searchedString) ||
              isFound(user?.country, searchedString)
            ) {
              filteredData.push(user);
            }
          }
        });
      } else {
        if (
          isFound(user?.firstName, searchedString) ||
          isFound(user?.lastName, searchedString) ||
          isFound(user?.country, searchedString)
        ) {
          filteredData.push(user);
        }
      }
    } else {
      if (selectedBadges && selectedBadges.length > 0) {
        selectedBadges.map((badge: ILeaderboardBadge) => {
          if (
            getBadgeNameFromLeaderboardData(user)
              ?.toLowerCase()
              .includes(badge.label || '')
          ) {
            filteredData.push(user);
          }
        });
      }
    }
  });
  const uniqueFilteredData = [];
  const map = new Map();
  // to remove duplicates from filteredData array
  for (const item of filteredData) {
    if (!map.has(item.rank)) {
      map.set(item.rank, true);
      uniqueFilteredData.push({
        rank: item.rank,
        firstName: item.firstName,
        lastName: item.lastName,
        country: item.country,
        email: item.email,
        badges: item.badges,
        xpPoints: item.xpPoints,
      });
    }
  }
  return uniqueFilteredData;
};
