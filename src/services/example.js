import request from '../utils/request';

const proxyPrefix = '/apis';
export function query() {
  return request('/api/users');
}
export function testCnode() {
  return request(proxyPrefix + '/api/v1/topics');
}
