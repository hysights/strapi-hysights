'use strict';

/**
 * home-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-test.home-test');
