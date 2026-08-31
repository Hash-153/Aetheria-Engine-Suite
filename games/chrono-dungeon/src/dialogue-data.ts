import { DialogueTree } from '../../../packages/scripting/src/index.js';

export function createElderDialogue(): DialogueTree {
  const tree = new DialogueTree();

  tree.addNode({
    id: 'intro',
    speaker: 'Elder Oakhaven',
    text: 'Greetings, traveler. The Chrono Dungeons have destabilized the temporal fabric of our realm.',
    options: [
      { text: 'I am ready to restore the timeline.', targetNodeId: 'quest_accept' },
      { text: 'What dangers lurk within the catacombs?', targetNodeId: 'lore_dangers' },
      { text: 'Farewell for now.', targetNodeId: 'exit' }
    ]
  });

  tree.addNode({
    id: 'quest_accept',
    speaker: 'Elder Oakhaven',
    text: 'Take this blade and enter the first portal. Slay the Chrono Golem to stabilize the anomaly!',
    options: [
      { text: 'Consider it done.', targetNodeId: 'exit' }
    ]
  });

  tree.addNode({
    id: 'lore_dangers',
    speaker: 'Elder Oakhaven',
    text: 'Temporal Specters phase between dimensions, and Void Stalkers strike from the shadows.',
    options: [
      { text: 'I fear no shadow. Give me the quest.', targetNodeId: 'quest_accept' },
      { text: 'I must prepare first.', targetNodeId: 'exit' }
    ]
  });

  tree.addNode({
    id: 'exit',
    speaker: 'Elder Oakhaven',
    text: 'May the temporal currents guide your steps.',
    options: []
  });

  return tree;
}
