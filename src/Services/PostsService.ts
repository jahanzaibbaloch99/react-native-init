import {get} from './HttpService';
import {getURIFor} from '../Helpers/URIBuilder';

export default class PostsService {
  static getPosts = () => {
    return get('posts');
  };

  static getPost = (id) => {
    var url = getURIFor('posts', {
      id: id,
    });

    return get(url);
  };
}
