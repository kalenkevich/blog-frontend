export const mockPost = {
  title: 'Mock Post',
  contentPreview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis velit, dictum pulvinar dignissim vel, consequat molestie augue. Cras eu urna id tellus commodo varius ultrices non dolor. Maecenas elementum mi ac odio consequat tincidunt ut quis felis. Vivamus facilisis euismod orci, in cursus mauris aliquet iaculis. Phasellus eget condimentum nibh. Phasellus congue, erat sit amet tempor lacinia, lectus nibh accumsan dolor, et lobortis nunc urna ac eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed massa mauris, bibendum ut ex nec, tincidunt mollis ante. Suspendisse tincidunt nisl sed molestie luctus. Proin vestibulum magna ut nibh placerat maximus. Nam vel varius nunc, nec cursus neque. Aenean tincidunt erat et malesuada sollicitudin.',
  user: {
    id: 'user0',
    name: 'Test user name',
  },
  rate: 5,
  tags: [{
    id: 'tagId0',
    name: 'Test1 tag name',
  }, {
    id: 'tagId1',
    name: 'Test2 tag name',
  }, {
    id: 'tagId2',
    name: 'Test3 tag name',
  }],
  commentsCount: 10,
  creationDate: 'creation date',
};

const mockPosts = [];

for (let i = 0; i < 10; i++) {
  mockPosts.push({
    ...mockPost,
    id: `post${i}`,
  });
}

export const getPosts = ({ page }) => Promise.resolve((mockPosts));
export const searchPosts = ({ searchQuery, page }) => Promise.resolve((mockPosts));
