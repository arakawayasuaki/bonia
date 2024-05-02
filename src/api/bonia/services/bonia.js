'use strict';

/**
 * bonia service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bonia.bonia');
