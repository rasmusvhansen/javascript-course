'use strict';
if (undefined || null || false || 0 || NaN || '') {
  console.log('Some of these are truthy');
} else {
  console.log('None of these are truthy');
}