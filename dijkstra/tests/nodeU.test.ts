import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node U ==========================================================================================================
let start = "U";
let end: string;

// t.test('Path from U to A', t => {
//     end = "A";
//     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['A', 'B'], distance: 1 });
//     t.end();
// });

// t.test('Path from U to B', t => {
//     end = "C";
//     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['B', 'C'], distance: 2 });
//     t.end();
// });

// t.test('Path from U to C', t => {
//     end = "D";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
//     t.end();
// });

// t.test('Path from U to D', t => {
//     end = "E";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['D', 'E'], distance: 4 });
//     t.end();
// });

// t.test('Path from U to E', t => {
//     end = "F";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['E', 'F'], distance: 3 });
//     t.end();
// });

// t.test('Path from U to F', t => {
//     end = "G";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['F', 'G'], distance: 2 });
//     t.end();
// });

// t.test('Path from U to G', t => {
//     end = "H";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['G', 'H'], distance: 4 });
//     t.end();
// });

// t.test('Path from U to H', t => {
//     end = "I";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['H', 'I'], distance: 2 });
//     t.end();
// });

// t.test('Path from U to I', t => {
//     end = "J";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['I', 'J'], distance: 4 });
//     t.end();
// });

// t.test('Path from U to J', t => {
//     end = "K";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['J', 'K'], distance: 3 });
//     t.end();
// });

// t.test('Path from U to K', t => {
//     end = "L";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['K', 'L'], distance: 2 });
//     t.end();
// });

// t.test('Path from U to L', t => {
//     end = "M";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['L', 'M'], distance: 5 });
//     t.end();
// });

// t.test('Path from U to M', t => {
//     end = "N";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['M', 'N'], distance: 3 });
//     t.end();
// });

// t.test('Path from U to N', t => {
//     end = "O";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['N', 'O'], distance: 4 });
//     t.end();
// });

// t.test('Path from U to O', t => {
//     end = "P";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['O', 'Q', 'P'], distance: 5 });
//     t.end();
// });

// t.test('Path from U to P', t => {
//     end = "Q";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['P', 'Q'], distance: 2 });
//     t.end();
// });

// t.test('Path from U to Q', t => {
//     end = "R";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['Q', 'R'], distance: 5 });
//     t.end();
// });

// t.test('Path from U to R', t => {
//     end = "S";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['R', 'S'], distance: 3 });
//     t.end();
// });

// t.test('Path from U to S', t => {
//     end = "T";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['S', 'R', 'T'], distance: 2 });
//     t.end();
// });

// t.test('Path from U to T', t => {
//     end = "U";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['T', 'U'], distance: 3 });
//     t.end();
// });

t.test('Path from U to V', t => {
    end = "V";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['U', 'V'], distance: 2 });
    t.end();
});

t.test('Path from U to W', t => {
    end = "W";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['U', 'W'], distance: 5 });
    t.end();
});

t.test('Path from U to X', t => {
    end = "X";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['U', 'V', 'X'], distance: 5 });
    t.end();
});

t.test('Path from U to Y', t => {
    end = "Y";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['U', 'W', 'Y'], distance: 8 });
    t.end();
});

t.test('Path from U to Z', t => {
    end = "Z";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['U', 'V', 'X', 'Z'], distance: 9 });
    t.end();
});
// =================================================================================================================
