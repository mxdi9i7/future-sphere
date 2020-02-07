import coursesData from '../data/courses.js';
import { renderContentToCourse } from './dom.js';
const type = window.location.search.split('=')[1];

const typeData = coursesData.find(item => item.slug === type);

renderContentToCourse(typeData);
