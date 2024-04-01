import { Region } from '@medusajs/medusa';
import { cache } from 'react';

import { medusaClient } from '@lib/config';
import medusaError from '@lib/util/medusa-error';
import { getMedusaHeaders } from './base';

// Region actions
export const listRegions = cache(function () {
    return medusaClient.regions
        .list()
        .then(({ regions }) => regions)
        .catch((err) => {
            // eslint-disable-next-line no-console
            console.error(err);

            return null;
        });
});

export const retrieveRegion = cache(function (id: string) {
    const headers = getMedusaHeaders(['regions']);

    return medusaClient.regions
        .retrieve(id, headers)
        .then(({ region }) => region)
        .catch((err) => medusaError(err));
});

const regionMap = new Map<string, Region>();

export const getRegion = cache(async function (countryCode: string) {
    try {
        if (regionMap.has(countryCode)) {
            return regionMap.get(countryCode);
        }

        const regions = await listRegions();

        if (!regions) {
            return null;
        }

        regions.forEach((region) => {
            region.countries.forEach((c) => {
                regionMap.set(c.iso_2, region);
            });
        });

        const region = countryCode
            ? regionMap.get(countryCode)
            : regionMap.get('us');

        return region;
    } catch (e: any) {
        // eslint-disable-next-line no-console
        console.error(e.toString());

        return null;
    }
});
