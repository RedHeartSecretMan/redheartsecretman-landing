(() => {
  const projects = [
    { number: '01', type: 'LLM INFERENCE', title: 'vllm-oxide', description: 'An open-source LLM inference engine built with Rust, Candle and custom CUDA kernels, supporting continuous batching and KV caching.', screen: 'VLLM-<br>OXIDE', tags: ['Rust', 'CUDA', 'KV Cache'], href: 'https://github.com/RedHeartSecretMan/vllm-oxide' },
    { number: '02', type: 'AGENT WORKFLOWS', title: 'dag-skill', description: 'Coordinates approved ticket dependency graphs in Git projects, guiding agents through implementation, validation and integration.', screen: 'DAG<br>SKILL', tags: ['Agents', 'Git', 'Python'], href: 'https://github.com/RedHeartSecretMan/dag-skill' },
    { number: '03', type: 'DATA RESEARCH', title: 'a-share-research-skill', description: 'A deterministic CLI for A-share research that preserves security identity, observation time, sources and calculation provenance.', screen: 'A-SHARE<br>RESEARCH', tags: ['Python', 'Data', 'Research'], href: 'https://github.com/RedHeartSecretMan/a-share-research-skill' },
    { number: '04', type: 'MEDIA TOOLS', title: 'any-translate', description: 'A real-time subtitle translation plugin for PotPlayer, connecting to LLM and custom JSON translation APIs.', screen: 'ANY-<br>TRANSLATE', tags: ['AngelScript', 'LLM', 'Subtitles'], href: 'https://github.com/RedHeartSecretMan/any-translate' },
  ];
  const zhProjects = [
    { number: '01', type: '大模型推理', title: 'vllm-oxide', description: '基于 Rust、Candle 与自定义 CUDA 算子的开源大模型推理引擎，支持连续批处理和 KV Cache。', screen: 'VLLM-<br>OXIDE', tags: ['Rust', 'CUDA', 'KV Cache'], href: 'https://github.com/RedHeartSecretMan/vllm-oxide' },
    { number: '02', type: 'AGENT 协作', title: 'dag-skill', description: '在 Git 项目中协调已批准的 Ticket 依赖图，组织 Agent 完成实现、验证与集成。', screen: 'DAG<br>SKILL', tags: ['Agents', 'Git', 'Python'], href: 'https://github.com/RedHeartSecretMan/dag-skill' },
    { number: '03', type: '数据研究', title: 'a-share-research-skill', description: '通过确定性 CLI 组织 A 股研究，保留证券身份、观测时点、数据来源与计算谱系。', screen: 'A-SHARE<br>RESEARCH', tags: ['Python', 'Data', 'Research'], href: 'https://github.com/RedHeartSecretMan/a-share-research-skill' },
    { number: '04', type: '音视频工具', title: 'any-translate', description: 'PotPlayer 实时字幕翻译插件，可接入多种 LLM 和自定义 JSON 翻译接口。', screen: 'ANY-<br>TRANSLATE', tags: ['AngelScript', 'LLM', 'Subtitles'], href: 'https://github.com/RedHeartSecretMan/any-translate' },
  ];
  const translations = {
    en: {
      nav: { home: 'Home', work: 'Work', about: 'About', contact: 'Contact' }, resume: 'Résumé',
      hero: { title: 'Make<br><em>intelligence</em><br>usable<span class="period">.</span>', note: 'Scroll to inspect my work' },
      work: { kicker: 'WORK', title: "Things I've<br><em>built.</em>", description: 'A selection of open-source projects spanning model inference, agent workflows, data research and developer tools.', hint: 'Drag or use the arrow keys to explore', link: 'View project' },
      about: { title: 'Making digital work<br><em>more inspectable.</em>', p1: 'I work between models, infrastructure and their users, making complex AI systems runnable, explainable and ready for the next iteration.', p2: 'Over the past year at Iluvatar, I have worked on model application testing across vLLM, CUDA, model runtimes and heterogeneous accelerators, from deployment and compatibility to correctness and performance regression.', p3: 'Before that, I helped productize intelligent transportation systems and traffic VLMs, and earlier researched scattering imaging and aberration compensation, contributing to eight papers.', p4: 'I like turning an unclear problem into clear What, Why and How, then putting the answer into code, tests and documentation. Read my <a href="https://me.redheartsecretman.top/" target="_blank" rel="noopener noreferrer">full résumé</a> to learn more.' },
      contact: { kicker: 'CONTACT', title: 'Have a problem<br><em>worth solving?</em>', description: 'If you are building an AI product, inference platform or developer tool, let’s talk.', emailLabel: 'General enquiries', resumeLabel: 'Résumé', socialLabel: 'Social', locationLabel: 'Based in', location: 'Shanghai, China' },
      footer: { top: 'Back to top' }, langLabel: '中文', title: 'Wang Hao — AI Application Test Engineer', description: 'Wang Hao — model application testing, inference systems, vision algorithms and reproducible AI tools.'
    },
    zh: {
      nav: { home: '首页', work: '项目', about: '关于', contact: '联系' }, resume: '简历',
      hero: { title: '让<br><em>智能</em><br>真正可用<span class="period">。</span>', note: '向下浏览项目' },
      work: { kicker: '项目', title: '开源项目<br><em>与实践。</em>', description: '精选开源项目，涵盖模型推理、Agent 协作、数据研究与开发者工具。', hint: '拖动或使用方向键切换项目', link: '查看项目' },
      about: { title: '让数字工作<br><em>更易理解。</em>', p1: '我在模型、基础设施和使用者之间工作，让复杂的 AI 系统能被运行、被解释，也能在下一次迭代中被重新验证。', p2: '过去一年，我在天数智芯从事模型应用测试开发，关注 vLLM、CUDA、模型运行时和异构加速环境，从部署、兼容性一路覆盖到正确性和性能回归。', p3: '此前，我参与智慧交通系统和交通垂域视觉语言模型的产品化；更早在光子芯片研究院研究散射成像与像差补偿，参与发表 8 篇论文。', p4: '我喜欢把一个模糊的问题拆成清晰的 What、Why 和 How，再把答案写进代码、测试和文档里。欢迎查看我的<a href="https://me.redheartsecretman.top/" target="_blank" rel="noopener noreferrer">完整简历</a>。' },
      contact: { kicker: '联系', title: '有值得<br><em>解决的问题？</em>', description: '如果你正在构建 AI 产品、推理平台或开发者工具，欢迎和我聊聊。', emailLabel: '邮件', resumeLabel: '简历', socialLabel: '社交', locationLabel: '所在城市', location: '中国，上海' },
      footer: { top: '回到顶部' }, langLabel: 'EN', title: '王昊 — AI 应用测试工程师', description: '王昊的个人主页：模型应用测试开发、推理系统、视觉算法与可复现的 AI 工具。'
    }
  };
  const root = document.documentElement;
  const carousel = document.querySelector('[data-carousel]');
  const year = document.querySelector('[data-year]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = 0;
  let language = (() => { try { return localStorage.getItem('landing-language') || 'zh'; } catch { return 'zh'; } })();

  if (year) year.textContent = String(new Date().getFullYear());

  // Native Three.js stage with a CSS-only ambient fallback for file previews and WebGL failures.
  const canvas = document.getElementById?.('stage-canvas');
  const setStageFallback = () => {
    canvas?.classList.add('stage-fallback');
  };
  const loadThreeStage = async () => {
    if (!canvas) return;
    try {
      const THREE = await import('./vendor/three.module.js');
      const { GLTFLoader } = await import('./vendor/loaders/GLTFLoader.js');
      const { attachCrtDisplay } = await import('./crt-display.mjs');
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
      renderer.setClearColor(0x000000, 0);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.12;
      document.body.classList.add('webgl-ready');
      if ('outputColorSpace' in renderer) renderer.outputColorSpace = THREE.SRGBColorSpace;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
      camera.position.set(0, 0, 6.8);
      camera.lookAt(0, 0, 0);
      const stage = new THREE.Group();
      scene.add(stage);

      scene.add(new THREE.HemisphereLight(0x8b7f91, 0x0b080c, 0.72));
      const keyLight = new THREE.DirectionalLight(0xffdfc4, 3.1);
      keyLight.position.set(-3.2, 3.8, 4.2);
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.set(1024, 1024);
      keyLight.shadow.camera.left = -4;
      keyLight.shadow.camera.right = 4;
      keyLight.shadow.camera.top = 4;
      keyLight.shadow.camera.bottom = -4;
      scene.add(keyLight);
      const screenLight = new THREE.PointLight(0xff9e72, 3.8, 6.5, 2);
      screenLight.position.set(0.3, 0.15, 2.2);
      screenLight.castShadow = true;
      scene.add(screenLight);
      const rimLight = new THREE.PointLight(0x8f9dff, 3.2, 7.5, 2);
      rimLight.position.set(2.8, 1.8, -2.4);
      scene.add(rimLight);
      const fillLight = new THREE.PointLight(0xd17dba, 1.25, 7, 2);
      fillLight.position.set(-2.6, -0.7, -1.4);
      scene.add(fillLight);

      const makeGlowTexture = () => {
        const glowCanvas = document.createElement('canvas');
        glowCanvas.width = 256;
        glowCanvas.height = 256;
        const glowContext = glowCanvas.getContext('2d');
        const gradient = glowContext.createRadialGradient(128, 128, 4, 128, 128, 128);
        gradient.addColorStop(0, 'rgba(255,236,206,.92)');
        gradient.addColorStop(.16, 'rgba(247,173,154,.55)');
        gradient.addColorStop(.48, 'rgba(151,107,161,.24)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        glowContext.fillStyle = gradient;
        glowContext.fillRect(0, 0, 256, 256);
        const texture = new THREE.CanvasTexture(glowCanvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        return texture;
      };
      const atmosphereTexture = makeGlowTexture();
      const makeBackdropTexture = () => {
        const backdropCanvas = document.createElement('canvas');
        backdropCanvas.width = 1024;
        backdropCanvas.height = 640;
        const backdropContext = backdropCanvas.getContext('2d');
        const base = backdropContext.createLinearGradient(0, 0, 0, 640);
        base.addColorStop(0, '#0b0c18');
        base.addColorStop(.42, '#171323');
        base.addColorStop(1, '#241317');
        backdropContext.fillStyle = base;
        backdropContext.fillRect(0, 0, 1024, 640);
        for (const glow of [
          { x: 760, y: 230, radius: 300, color: 'rgba(131,88,145,.32)' },
          { x: 510, y: 520, radius: 360, color: 'rgba(212,116,103,.18)' },
          { x: 180, y: 370, radius: 240, color: 'rgba(80,104,162,.14)' },
        ]) {
          const gradient = backdropContext.createRadialGradient(glow.x, glow.y, 8, glow.x, glow.y, glow.radius);
          gradient.addColorStop(0, glow.color);
          gradient.addColorStop(1, 'rgba(0,0,0,0)');
          backdropContext.fillStyle = gradient;
          backdropContext.fillRect(0, 0, 1024, 640);
        }
        const texture = new THREE.CanvasTexture(backdropCanvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        return texture;
      };
      const backdropTexture = makeBackdropTexture();
      const backdrop = new THREE.Mesh(
        new THREE.PlaneGeometry(18, 10),
        new THREE.MeshBasicMaterial({ map: backdropTexture, transparent: true, opacity: .86, depthWrite: false }),
      );
      backdrop.position.set(0, 0, -4.4);
      backdrop.renderOrder = -10;
      scene.add(backdrop);
      const atmosphere = new THREE.Group();
      atmosphere.position.z = -1.8;
      scene.add(atmosphere);
      const atmosphereMaterials = [];
      for (const cloud of [
        { color: 0x8b6d9f, opacity: .34, position: [-2.8, .95, 0], scale: [5.7, 2.8, 1] },
        { color: 0xd28c9d, opacity: .28, position: [2.6, -.5, -.2], scale: [5.4, 3.1, 1] },
        { color: 0x6c80bf, opacity: .23, position: [.15, 1.65, -.5], scale: [4.3, 2.2, 1] },
        { color: 0xd98472, opacity: .16, position: [-.4, -1.2, -.7], scale: [6.8, 1.8, 1] },
      ]) {
        const material = new THREE.SpriteMaterial({ map: atmosphereTexture, color: cloud.color, transparent: true, opacity: cloud.opacity, blending: THREE.AdditiveBlending, depthWrite: false });
        const sprite = new THREE.Sprite(material);
        sprite.position.set(...cloud.position);
        sprite.scale.set(...cloud.scale, 1);
        atmosphere.add(sprite);
        atmosphereMaterials.push(material);
      }
      const horizonMaterial = new THREE.SpriteMaterial({ map: atmosphereTexture, color: 0x9d6e92, transparent: true, opacity: .2, blending: THREE.AdditiveBlending, depthWrite: false });
      const horizonGlow = new THREE.Sprite(horizonMaterial);
      horizonGlow.position.set(0, -1.12, -.9);
      horizonGlow.scale.set(10, 1.45, 1);
      atmosphere.add(horizonGlow);
      atmosphereMaterials.push(horizonMaterial);

      const screenCanvas = document.createElement('canvas');
      screenCanvas.width = 1024;
      screenCanvas.height = 768;
      const screenContext = screenCanvas.getContext('2d');
      const screenTexture = new THREE.CanvasTexture(screenCanvas);
      if ('colorSpace' in screenTexture) screenTexture.colorSpace = THREE.SRGBColorSpace;
      let displayMaterial = null;
      let screenMode = 'hero';
      let screenNoiseTimer = null;
      const screenCopy = () => {
        if (screenMode === 'project') {
          const project = language === 'zh' ? zhProjects[current] : projects[current];
          return project.screen.replace(/<br\s*\/?>/gi, '\n');
        }
        return language === 'zh' ? '智能\n真正可用' : 'MAKE\nINTELLIGENCE\nUSABLE';
      };
      const drawScreen = (noise = false) => {
        const w = screenCanvas.width;
        const h = screenCanvas.height;
        screenContext.fillStyle = '#101512';
        screenContext.fillRect(0, 0, w, h);
        if (noise) {
          const image = screenContext.createImageData(w, h);
          for (let index = 0; index < image.data.length; index += 4) {
            const value = Math.floor(Math.random() * 145);
            image.data[index] = value;
            image.data[index + 1] = value;
            image.data[index + 2] = Math.floor(value * 0.92);
            image.data[index + 3] = 255;
          }
          screenContext.putImageData(image, 0, 0);
        } else {
          const isProject = screenMode === 'project';
          const field = screenContext.createLinearGradient(0, 0, 0, h);
          field.addColorStop(0, isProject ? '#0b1720' : '#101a22');
          field.addColorStop(.54, isProject ? '#17222b' : '#1a2026');
          field.addColorStop(1, '#090d12');
          screenContext.fillStyle = field;
          screenContext.fillRect(0, 0, w, h);

          const halo = screenContext.createRadialGradient(w * .48, h * .48, 10, w * .48, h * .48, w * .62);
          halo.addColorStop(0, isProject ? 'rgba(255,184,111,.26)' : 'rgba(255,194,133,.34)');
          halo.addColorStop(.35, isProject ? 'rgba(198,112,84,.12)' : 'rgba(219,132,104,.15)');
          halo.addColorStop(1, 'rgba(0,0,0,0)');
          screenContext.fillStyle = halo;
          screenContext.fillRect(0, 0, w, h);

          // A faint phosphor horizon and wire grid give the glass a real signal surface.
          screenContext.strokeStyle = isProject ? 'rgba(112,190,211,.28)' : 'rgba(244,170,128,.28)';
          screenContext.lineWidth = 3;
          screenContext.beginPath();
          screenContext.moveTo(0, h * .68);
          screenContext.lineTo(w, h * .56);
          screenContext.stroke();
          screenContext.strokeStyle = 'rgba(255,255,255,.08)';
          screenContext.lineWidth = 2;
          for (let x = -w; x < w * 2; x += 86) {
            screenContext.beginPath();
            screenContext.moveTo(w * .48 + (x - w * .48) * .18, h * .68);
            screenContext.lineTo(x, h);
            screenContext.stroke();
          }
          for (let y = h * .72; y < h; y += 42) {
            screenContext.beginPath();
            screenContext.moveTo(0, y);
            screenContext.lineTo(w, y - (y - h * .72) * .16);
            screenContext.stroke();
          }

          screenContext.fillStyle = isProject ? 'rgba(151,223,232,.8)' : 'rgba(255,210,169,.78)';
          screenContext.font = '600 22px "Helvetica Neue", "PingFang SC", sans-serif';
          screenContext.letterSpacing = '4px';
          screenContext.fillText(isProject ? 'RH / PROJECT SIGNAL' : 'RH / 001   DREAM DISPLAY', 54, 54);
          screenContext.fillText(isProject ? `0${current + 1} / 04` : 'ONLINE', w - 170, 54);

          // Wrap long project names within the same 4:3 glass area in both languages.
          const lines = [];
          for (const paragraph of screenCopy().split('\n')) {
            const words = language === 'zh' ? Array.from(paragraph) : paragraph.split(' ');
            let line = '';
            for (const word of words) {
              const next = line + (line && language !== 'zh' ? ' ' : '') + word;
              if (line && screenContext.measureText(next).width > w - 220) {
                lines.push(line); line = word;
              } else line = next;
            }
            lines.push(line);
          }
          screenContext.fillStyle = '#f7e1c4';
          screenContext.font = '600 70px Georgia, "Songti SC", serif';
          screenContext.textBaseline = 'middle';
          screenContext.shadowColor = isProject ? 'rgba(255,157,101,.72)' : 'rgba(255,208,146,.74)';
          screenContext.shadowBlur = 11;
          lines.forEach((line, index) => screenContext.fillText(line, 72, h * .46 + (index - (lines.length - 1) / 2) * 86));
          screenContext.shadowBlur = 0;

          // CRT scanlines, phosphor grain and edge falloff.
          screenContext.fillStyle = 'rgba(0,0,0,.16)';
          for (let y = 0; y < h; y += 5) screenContext.fillRect(0, y, w, 2);
          const vignette = screenContext.createRadialGradient(w * .5, h * .5, w * .25, w * .5, h * .5, w * .72);
          vignette.addColorStop(0, 'rgba(0,0,0,0)');
          vignette.addColorStop(.72, 'rgba(0,0,0,.12)');
          vignette.addColorStop(1, 'rgba(0,0,0,.72)');
          screenContext.fillStyle = vignette;
          screenContext.fillRect(0, 0, w, h);
        }
        screenTexture.needsUpdate = true;
        canvas.dataset.screenState = noise ? 'static' : 'content';
        if (reduceMotion && canvas.dataset.screenSurface) renderer.render(scene, camera);
      };
      drawScreen(false);

      const device = new THREE.Group();
      device.scale.setScalar(0.82);
      device.position.set(1.28, -0.05, 0.1);
      device.rotation.y = -0.28;
      stage.add(device);
      const modelRoot = new THREE.Group();
      modelRoot.position.set(1.42, -0.18, 0.1);
      stage.add(modelRoot);
      let activeDevice = device;
      try {
        const gltf = await new GLTFLoader().loadAsync('./assets/television_02/television_02_1k.gltf');
        const model = gltf.scene;
        const bounds = new THREE.Box3().setFromObject(model);
        const size = bounds.getSize(new THREE.Vector3());
        const center = bounds.getCenter(new THREE.Vector3());
        const fit = 2.55 / Math.max(size.x, size.y, size.z);
        model.scale.setScalar(fit);
        model.position.set(-center.x * fit, -center.y * fit, -center.z * fit);
        model.rotation.set(0, 0, 0);
        model.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            if (node.material?.map && 'colorSpace' in node.material.map) node.material.map.colorSpace = THREE.SRGBColorSpace;
          }
        });
        modelRoot.add(model);
        const display = attachCrtDisplay(model, screenTexture);
        displayMaterial = display.material;
        displayMaterial.emissiveIntensity = 1.35;
        displayMaterial.roughness = 0.46;
        canvas.dataset.screenSurface = 'original-glass';
        canvas.dataset.screenTriangles = String(display.triangleCount);
        device.visible = false;
        activeDevice = modelRoot;
      } catch (error) {
        console.warn('CRT asset display could not load:', error);
        modelRoot.visible = false;
      }
      const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x6a5a4b, roughness: 0.58, metalness: 0.12 });
      const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xe1c8aa, transparent: true, opacity: 0.28 });
      const body = new THREE.Mesh(new THREE.BoxGeometry(3.25, 2.28, 1.08), bodyMaterial);
      body.position.y = 0.02;
      device.add(body);
      device.add(new THREE.LineSegments(new THREE.EdgesGeometry(body.geometry), edgeMaterial));
      const topPanel = new THREE.Mesh(new THREE.BoxGeometry(3.08, 0.12, 1.03), new THREE.MeshStandardMaterial({ color: 0x9d8973, roughness: 0.44, metalness: 0.14 }));
      topPanel.position.set(0, 1.14, 0);
      device.add(topPanel);
      const bezel = new THREE.Mesh(new THREE.BoxGeometry(2.72, 1.58, 0.18), new THREE.MeshStandardMaterial({ color: 0x211c19, roughness: 0.42, metalness: 0.2 }));
      bezel.position.set(0, 0.2, 0.61);
      device.add(bezel);
      const glass = new THREE.Mesh(new THREE.PlaneGeometry(2.42, 1.22), new THREE.MeshStandardMaterial({ map: screenTexture, emissive: 0x8b3f23, emissiveIntensity: 0.65, roughness: 0.3, metalness: 0.05 }));
      glass.position.set(0, 0.2, 0.72);
      device.add(glass);
      for (let line = 0; line < 10; line += 1) {
        const scan = new THREE.Mesh(new THREE.PlaneGeometry(2.24, 0.012), new THREE.MeshBasicMaterial({ color: 0xffd89c, transparent: true, opacity: 0.2 }));
        scan.position.set(0, -0.27 + line * 0.105, 0.735);
        device.add(scan);
      }
      const base = new THREE.Mesh(new THREE.BoxGeometry(3.48, 0.24, 1.32), new THREE.MeshStandardMaterial({ color: 0x4d4035, roughness: 0.7, metalness: 0.16 }));
      base.position.set(0, -1.18, 0.12);
      device.add(base);
      const keyboard = new THREE.Group();
      keyboard.rotation.x = -0.14;
      keyboard.position.set(0, -1.31, 0.5);
      const keyMaterial = new THREE.MeshStandardMaterial({ color: 0x8c7966, roughness: 0.46, metalness: 0.12 });
      for (let row = 0; row < 3; row += 1) {
        const count = row === 2 ? 7 : 9;
        for (let key = 0; key < count; key += 1) {
          const cap = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.1, 0.19), keyMaterial);
          cap.position.set((key - (count - 1) / 2) * 0.27, row * 0.16, 0);
          keyboard.add(cap);
        }
      }
      device.add(keyboard);
      const slot = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.06, 0.1), new THREE.MeshStandardMaterial({ color: 0x1c1714, roughness: 0.8 }));
      slot.position.set(-0.55, -0.63, 0.71);
      device.add(slot);
      const buttonMaterial = new THREE.MeshStandardMaterial({ color: 0x302823, roughness: 0.36, metalness: 0.25 });
      for (const x of [0.82, 1.14]) {
        const button = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.1, 20), buttonMaterial);
        button.rotation.x = Math.PI / 2;
        button.position.set(x, -0.63, 0.73);
        device.add(button);
      }
      const power = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 8), new THREE.MeshBasicMaterial({ color: 0xd4f25a }));
      power.position.set(1.43, -0.63, 0.73);
      device.add(power);
      const particleCount = 520;
      const particlePositions = new Float32Array(particleCount * 3);
      for (let index = 0; index < particleCount; index += 1) {
        const seed = index * 12.9898;
        particlePositions[index * 3] = ((Math.sin(seed) * 43758.5453) % 1) * 6;
        particlePositions[index * 3 + 1] = ((Math.sin(seed + 19.19) * 43758.5453) % 1) * 4;
        particlePositions[index * 3 + 2] = ((Math.sin(seed + 71.71) * 43758.5453) % 1) * 2 - 1;
      }
      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      const particles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ color: 0xc9b4d9, size: 0.026, transparent: true, opacity: 0.42, sizeAttenuation: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      particles.material.opacity = 0.36;
      stage.add(particles);

      const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
      let scroll = 0;
      let targetScroll = 0;
      let workBlend = 0;
      let targetWorkBlend = 0;
      let width = 0;
      let height = 0;
      let frame = 0;
      const workSection = document.getElementById('work');
      const workStage = document.querySelector('.project-stage');
      const clamp01 = (value) => Math.max(0, Math.min(1, value));
      const updateWorkBlend = () => {
        if (!workSection) return;
        const rect = workSection.getBoundingClientRect();
        const transition = Math.max(window.innerHeight * 0.35, 1);
        targetWorkBlend = clamp01((window.innerHeight - rect.top) / transition) * clamp01(rect.bottom / transition);
        // The fixed stage must not sit behind the About or Contact copy.
        canvas.style.opacity = String(0.72 * clamp01((rect.bottom - window.innerHeight * 0.1) / Math.max(window.innerHeight * 0.5, 1)));
      };
      const resize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        const compact = width <= 560;
        modelRoot.scale.setScalar(compact ? 0.62 : 1);
        modelRoot.position.set(compact ? 0 : 1.42, compact ? -1 : -0.18, 0.1);
        device.scale.setScalar(compact ? 0.48 : 0.82);
        device.position.set(compact ? 0 : 1.28, compact ? -0.92 : -0.05, 0.1);
        renderer.setSize(width, height, false);
        camera.aspect = width / Math.max(height, 1);
        camera.updateProjectionMatrix();
        updateWorkBlend();
        if (reduceMotion) renderer.render(scene, camera);
      };
      const draw = (time) => {
        pointer.x += (pointer.targetX - pointer.x) * 0.04;
        pointer.y += (pointer.targetY - pointer.y) * 0.04;
        scroll += (targetScroll - scroll) * 0.04;
        workBlend = reduceMotion ? targetWorkBlend : workBlend + (targetWorkBlend - workBlend) * 0.08;
        stage.rotation.x = pointer.y * 0.12 - 0.03;
        stage.rotation.y = pointer.x * 0.18 + scroll * 0.22;
        stage.position.x = pointer.x * 0.07;
        stage.position.y = scroll * 0.16;
        atmosphere.position.x = pointer.x * 0.26;
        atmosphere.position.y = pointer.y * 0.12 + scroll * 0.08;
        activeDevice.rotation.z = pointer.y * 0.035;
        activeDevice.rotation.y = -0.28 + pointer.x * 0.16;
        if (workStage && workBlend > 0.001) {
          const rect = workStage.getBoundingClientRect();
          const viewHeight = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
          const viewWidth = viewHeight * camera.aspect;
          const targetX = ((rect.left + rect.width / 2) / width - 0.5) * viewWidth;
          const targetY = (0.5 - (rect.top + rect.height / 2) / height) * viewHeight;
          const modelWidth = activeDevice === modelRoot ? 2.55 : 3.48;
          const stageFill = width <= 560 ? 0.78 : 0.92;
          const targetScale = Math.min(0.9, Math.max(0.2, (rect.width / width) * viewWidth / modelWidth * stageFill));
          const baseScale = activeDevice === modelRoot ? (width <= 560 ? 0.62 : 1) : (width <= 560 ? 0.48 : 0.82);
          const baseX = width <= 560 ? 0 : (activeDevice === modelRoot ? 1.42 : 1.28);
          const baseY = width <= 560 ? (activeDevice === modelRoot ? -1 : -0.92) : (activeDevice === modelRoot ? -0.18 : -0.05);
          activeDevice.position.x = THREE.MathUtils.lerp(baseX, targetX, workBlend);
          activeDevice.position.y = THREE.MathUtils.lerp(baseY, targetY, workBlend);
          activeDevice.scale.setScalar(THREE.MathUtils.lerp(baseScale, targetScale, workBlend));
        } else {
          const compact = width <= 560;
          activeDevice.position.set(compact ? 0 : (activeDevice === modelRoot ? 1.42 : 1.28), compact ? (activeDevice === modelRoot ? -1 : -0.92) : (activeDevice === modelRoot ? -0.18 : -0.05), 0.1);
          activeDevice.scale.setScalar(activeDevice === modelRoot ? (compact ? 0.62 : 1) : (compact ? 0.48 : 0.82));
        }
        screenLight.position.x = 0.3 + pointer.x * 0.22;
        particles.rotation.y = pointer.x * 0.08 + scroll * 0.1;
        camera.position.x += (pointer.x * 0.12 - camera.position.x) * 0.025;
        camera.position.y += (-pointer.y * 0.08 - camera.position.y) * 0.025;
        camera.position.z = 6.8 - scroll * 0.18;
        camera.lookAt(0, scroll * 0.15, 0);
        renderer.render(scene, camera);
        if (!reduceMotion) frame = window.requestAnimationFrame(draw);
      };
      resize();
      window.addEventListener('resize', resize, { passive: true });
      window.addEventListener('pointermove', (event) => {
        pointer.targetX = event.clientX / Math.max(window.innerWidth, 1) - 0.5;
        pointer.targetY = event.clientY / Math.max(window.innerHeight, 1) - 0.5;
      }, { passive: true });
      window.addEventListener('scroll', () => {
        const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        targetScroll = window.scrollY / max - 0.5;
        updateWorkBlend();
        const nextMode = window.scrollY > window.innerHeight * 0.45 ? 'project' : 'hero';
        if (nextMode !== screenMode) { screenMode = nextMode; drawScreen(false); }
        if (reduceMotion) draw(0);
      }, { passive: true });
      window.addEventListener('landing-language-change', () => drawScreen(false));
      window.addEventListener('landing-project-change', () => { if (screenMode === 'project') drawScreen(false); });
      draw(0);
      // Start only after the model/material is present, so loading cannot consume the boot.
      let bootTimeout = null;
      if (!reduceMotion) {
        drawScreen(true);
        screenNoiseTimer = window.setInterval(() => drawScreen(true), 70);
        bootTimeout = window.setTimeout(() => {
          window.clearInterval(screenNoiseTimer);
          screenNoiseTimer = null;
          drawScreen(false);
        }, 900);
      }
      window.addEventListener('pagehide', () => {
        window.cancelAnimationFrame(frame);
        if (screenNoiseTimer) window.clearInterval(screenNoiseTimer);
        if (bootTimeout) window.clearTimeout(bootTimeout);
        displayMaterial?.dispose();
        screenTexture.dispose();
        backdropTexture.dispose();
        atmosphereMaterials.forEach((material) => material.dispose());
        atmosphereTexture.dispose();
        particleGeometry.dispose();
        renderer.dispose();
      }, { once: true });
    } catch {
      document.body.classList.remove('webgl-ready');
      setStageFallback();
    }
  };
  loadThreeStage();

  const set = (selector, value, html = false) => {
    const node = document.querySelector(selector);
    if (node) html ? node.innerHTML = value : node.textContent = value;
  };
  const emit = (name) => {
    if (typeof window.dispatchEvent !== 'function') return;
    window.dispatchEvent(typeof Event === 'function' ? new Event(name) : { type: name });
  };

  const applyLanguage = (nextLanguage, persist = true) => {
    language = nextLanguage === 'en' ? 'en' : 'zh';
    const text = translations[language];
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.body.dataset.language = language;
    document.title = text.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', text.description);
    document.querySelectorAll('[data-copy]').forEach((node) => {
      const path = node.dataset.copy.split('.');
      let value = text;
      path.forEach((key) => { value = value?.[key]; });
      if (typeof value === 'string') node.textContent = value;
    });
    document.querySelectorAll('[data-copy-html]').forEach((node) => {
      const path = node.dataset.copyHtml.split('.');
      let value = text;
      path.forEach((key) => { value = value?.[key]; });
      if (typeof value === 'string') node.innerHTML = value;
    });
    const toggle = document.querySelector('[data-lang-toggle]');
    if (toggle) { toggle.textContent = text.langLabel; toggle.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换中文'); }
    if (persist) { try { localStorage.setItem('landing-language', language); } catch {} }
    renderProject(false);
    emit('landing-language-change');
  };

  const renderProject = (animate = true) => {
    const project = language === 'zh' ? zhProjects[current] : projects[current];
    set('[data-project-number]', project.number);
    set('[data-project-number-text]', project.number);
    set('[data-project-type]', project.type);
    set('[data-project-title]', project.title);
    set('[data-project-description]', project.description);
    set('[data-project-screen]', project.screen, true);
    const tags = document.querySelector('[data-project-tags]');
    if (tags) tags.innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join('');
    const link = document.querySelector('[data-project-link]');
    if (link) {
      link.href = project.href;
      link.textContent = translations[language].work.link;
    }
    const progress = document.querySelector('[data-progress]');
    if (progress) progress.style.width = `${((current + 1) / projects.length) * 100}%`;
    if (carousel) {
      carousel.dataset.index = String(current);
      carousel.style.setProperty('--drag-offset', '0px');
      if (animate) {
        carousel.classList.remove('is-changing');
        void carousel.offsetWidth;
        carousel.classList.add('is-changing');
      }
    }
    emit('landing-project-change');
  };

  const move = (step) => {
    current = (current + step + projects.length) % projects.length;
    renderProject();
  };

  document.querySelector('[data-prev]')?.addEventListener('click', () => move(-1));
  document.querySelector('[data-next]')?.addEventListener('click', () => move(1));
  document.querySelector('[data-lang-toggle]')?.addEventListener('click', () => applyLanguage(language === 'zh' ? 'en' : 'zh'));

  if (carousel) {
    carousel.tabIndex = 0;
    carousel.setAttribute('role', 'region');
    carousel.setAttribute('aria-roledescription', 'carousel');
    carousel.setAttribute('aria-label', '精选项目');

    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
    });

    let lastWheel = 0;
    carousel.addEventListener('wheel', (event) => {
      if (Math.abs(event.deltaX) < 12 || Math.abs(event.deltaX) < Math.abs(event.deltaY)) return;
      const now = performance.now();
      if (now - lastWheel < 320) return;
      event.preventDefault();
      lastWheel = now;
      move(event.deltaX > 0 ? 1 : -1);
    }, { passive: false });

    let drag = null;
    const beginDrag = (event) => {
      if (event.target.closest('a, button')) return;
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      drag = { pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, axis: null, offset: 0 };
      carousel.classList.add('is-dragging');
      carousel.setPointerCapture?.(event.pointerId);
    };
    const updateDrag = (event) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      const dx = event.clientX - drag.startX;
      const dy = event.clientY - drag.startY;
      if (!drag.axis && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) drag.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      if (drag.axis !== 'x') return;
      event.preventDefault();
      drag.offset = dx * 0.82;
      carousel.style.setProperty('--drag-offset', `${drag.offset}px`);
    };
    const finishDrag = (event) => {
      if (!drag || (event && event.pointerId !== drag.pointerId)) return;
      const offset = drag.offset;
      const axis = drag.axis;
      drag = null;
      carousel.classList.remove('is-dragging');
      carousel.style.setProperty('--drag-offset', '0px');
      if (axis === 'x' && Math.abs(offset) > 42) move(offset < 0 ? 1 : -1);
      else renderProject(false);
    };
    carousel.addEventListener('pointerdown', beginDrag);
    carousel.addEventListener('pointermove', updateDrag);
    carousel.addEventListener('pointerup', finishDrag);
    carousel.addEventListener('pointercancel', finishDrag);
    carousel.addEventListener('lostpointercapture', () => finishDrag());
  }

  window.addEventListener('pointermove', (event) => {
    if (reduceMotion) return;
    root.style.setProperty('--pointer-x', `${(event.clientX / window.innerWidth - 0.5) * 18}px`);
    root.style.setProperty('--pointer-y', `${(event.clientY / window.innerHeight - 0.5) * 14}px`);
  }, { passive: true });

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('[data-nav]')];
  if (typeof IntersectionObserver !== 'undefined') {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) navLinks.forEach((link) => link.classList.toggle('active', link.dataset.nav === entry.target.id));
    }), { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => observer.observe(section));
  }

  applyLanguage(language, false);
})();
