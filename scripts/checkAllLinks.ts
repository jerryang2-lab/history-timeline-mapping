import { FEATURED_LOCATIONS_LIST } from '../src/data/featuredLocations.ts';
import { FEATURED_FIGURES_LIST } from '../src/data/featuredFigures.ts';
import { FEATURED_ARTIFACTS_LIST } from '../src/data/featuredArtifacts.ts';
import { allHistoricalEvents } from '../src/data/index.ts';

const eventMap = new Map(allHistoricalEvents.map(e => [e.id, e]));

console.log('=== 1. 檢查關鍵地理 (100筆) ===');
let locErrors = 0;
FEATURED_LOCATIONS_LIST.forEach((loc, idx) => {
  if (loc.id !== idx + 1) {
    console.error(`[Geo ID Mismatch] index ${idx} has id ${loc.id}`);
    locErrors++;
  }
  const event = eventMap.get(loc.eventId);
  if (!event) {
    console.error(`[Geo Event Not Found] id ${loc.id}, eventId ${loc.eventId}`);
    locErrors++;
  }
  if (typeof loc.lat !== 'number' || isNaN(loc.lat) || loc.lat < -90 || loc.lat > 90) {
    console.error(`[Geo Invalid Lat] id ${loc.id}: ${loc.lat}`);
    locErrors++;
  }
  if (typeof loc.lng !== 'number' || isNaN(loc.lng) || loc.lng < -180 || loc.lng > 180) {
    console.error(`[Geo Invalid Lng] id ${loc.id}: ${loc.lng}`);
    locErrors++;
  }
  const expectedUrl = `https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`;
  if (loc.googleMapsUrl !== expectedUrl) {
    console.error(`[Geo URL Mismatch] id ${loc.id}: got ${loc.googleMapsUrl}, expected ${expectedUrl}`);
    locErrors++;
  }
});
console.log(`地理檢查完成：共 ${FEATURED_LOCATIONS_LIST.length} 筆，錯誤: ${locErrors}`);

console.log('\n=== 2. 檢查關鍵人物 (100筆) ===');
let figErrors = 0;
FEATURED_FIGURES_LIST.forEach((fig, idx) => {
  if (fig.id !== idx + 1) {
    console.error(`[Figure ID Mismatch] index ${idx} has id ${fig.id}`);
    figErrors++;
  }
  const event = eventMap.get(fig.eventId);
  if (!event) {
    console.error(`[Figure Event Not Found] id ${fig.id}, eventId ${fig.eventId}`);
    figErrors++;
  } else {
    const hasFigure = event.figures.some(f => f.includes(fig.figureName) || fig.figureName.includes(f));
    if (!hasFigure) {
      console.warn(`[Figure Name Warning] id ${fig.id} (${fig.figureName}) not in event figures: ${JSON.stringify(event.figures)}`);
    }
  }

  // 檢查 URL 編碼是否合法
  try {
    const decoded = decodeURIComponent(fig.wikiUrl.replace('https://zh.wikipedia.org/wiki/', ''));
    if (decoded.includes('%')) {
      console.error(`[Figure URL Corrupted %] id ${fig.id} (${fig.figureName}): ${fig.wikiUrl}`);
      figErrors++;
    }
    const expectedUrl = `https://zh.wikipedia.org/wiki/${encodeURIComponent(fig.wikiTitle)}`;
    if (fig.wikiUrl !== expectedUrl) {
      console.warn(`[Figure URL Discrepancy] id ${fig.id} (${fig.figureName}): current "${fig.wikiUrl}" vs expected "${expectedUrl}" (decoded: ${decoded} vs ${fig.wikiTitle})`);
      figErrors++;
    }
  } catch (err: any) {
    console.error(`[Figure URL Decode Error] id ${fig.id} (${fig.figureName}): ${err.message}`);
    figErrors++;
  }
});
console.log(`人物檢查完成：共 ${FEATURED_FIGURES_LIST.length} 筆，異常: ${figErrors}`);

console.log('\n=== 3. 檢查關鍵遺產 (100筆) ===');
let artErrors = 0;
FEATURED_ARTIFACTS_LIST.forEach((art, idx) => {
  if (art.id !== idx + 1) {
    console.error(`[Artifact ID Mismatch] index ${idx} has id ${art.id}`);
    artErrors++;
  }
  const event = eventMap.get(art.eventId);
  if (!event) {
    console.error(`[Artifact Event Not Found] id ${art.id}, eventId ${art.eventId}`);
    artErrors++;
  }

  try {
    const decoded = decodeURIComponent(art.wikiUrl.replace('https://zh.wikipedia.org/wiki/', ''));
    if (decoded.includes('%')) {
      console.error(`[Artifact URL Corrupted %] id ${art.id} (${art.artifactName}): ${art.wikiUrl}`);
      artErrors++;
    }
    const expectedUrl = `https://zh.wikipedia.org/wiki/${encodeURIComponent(art.wikiTitle)}`;
    if (art.wikiUrl !== expectedUrl) {
      console.warn(`[Artifact URL Discrepancy] id ${art.id} (${art.artifactName}): current "${art.wikiUrl}" vs expected "${expectedUrl}" (decoded: ${decoded} vs ${art.wikiTitle})`);
      artErrors++;
    }
  } catch (err: any) {
    console.error(`[Artifact URL Decode Error] id ${art.id} (${art.artifactName}): ${err.message}`);
    artErrors++;
  }
});
console.log(`遺產檢查完成：共 ${FEATURED_ARTIFACTS_LIST.length} 筆，異常: ${artErrors}`);
