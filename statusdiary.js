(function () {
  if (!window.iconifyLoaded && !document.getElementById('iconify-script')) {
    var iconifyScript = document.createElement('script');
    iconifyScript.id = 'iconify-script';
    iconifyScript.src = 'https://code.iconify.design/3/3.1.0/iconify.min.js';
    document.head.appendChild(iconifyScript);
    window.iconifyLoaded = true;
  }

  var currentScript = document.currentScript || (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();

  var name = currentScript.getAttribute('name') || 'Anonymous';
  var pronouns = currentScript.getAttribute('pronouns') || '';
  var age = currentScript.getAttribute('age') || '';
  var nationality = currentScript.getAttribute('nationality') || '';
  var feeling = currentScript.getAttribute('feeling') || '';
  var currentlyDoing = currentScript.getAttribute('currentlydoing') || '';
  var focus = currentScript.getAttribute('focus') || '';
  var status = currentScript.getAttribute('status') || '';
  var statusColor = currentScript.getAttribute('statusColor') || '#2ecc71';
  var avatar = currentScript.getAttribute('avatarImage') || 'https://via.placeholder.com/80/f8a5c2/ffffff?text=♥';
  var bio = currentScript.getAttribute('bio') || 'Welcome to my cozy blog corner!';
  var bloglink = currentScript.getAttribute('bloglink') || '#';
  var niche = currentScript.getAttribute('niche') || 'Personal Blog';
  var likes = currentScript.getAttribute('likes') || '';
  var dislikes = currentScript.getAttribute('dislikes') || '';
  
  // Font & Style attributes
  var textFont = currentScript.getAttribute('textFont') || "'Palatino Linotype', 'Book Antiqua', Palatino, serif";
  var textSize = currentScript.getAttribute('textSize') || '13';
  var cardColor = currentScript.getAttribute('cardColor') || '#fff0f5';
  var borderStyle = currentScript.getAttribute('borderStyle') || 'dashed';
  var accentColor = currentScript.getAttribute('accentColor') || '#ff6b81';
  var sparkles = currentScript.getAttribute('sparkles') === 'true';

  var widgetId = 'kw-ring-' + Math.floor(Math.random() * 100000);
  var displayLink = bloglink.replace(/^https?:\/\//, '').replace(/\/$/, '');

  var css = `
    .` + widgetId + `-container { width: 100% !important; max-width: 320px !important; margin: 15px auto !important; font-family: ` + textFont + ` !important; font-size: ` + textSize + `px !important; color: #2d3436 !important; box-sizing: border-box !important; }
    .` + widgetId + `-perspective { perspective: 1000px !important; height: 280px !important; width: 100% !important; }
    .` + widgetId + `-card { width: 100% !important; height: 100% !important; position: relative !important; transform-style: preserve-3d !important; transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1) !important; border-radius: 16px !important; box-shadow: 0 8px 18px rgba(0,0,0,0.08) !important; }
    .` + widgetId + `-card.flipped { transform: rotateY(180deg) !important; }
    
    .` + widgetId + `-face { position: absolute !important; width: 100% !important; height: 100% !important; backface-visibility: hidden !important; -webkit-backface-visibility: hidden !important; border-radius: 12px !important; border: 2px ` + borderStyle + ` ` + accentColor + ` !important; background-color: ` + cardColor + ` !important; box-sizing: border-box !important; padding: 12px !important; overflow: hidden !important; display: flex !important; flex-direction: column !important; justify-content: space-between !important; top: 0 !important; left: 0 !important; font-family: ` + textFont + ` !important; font-size: ` + textSize + `px !important; }
    
    @keyframes ` + widgetId + `-twinkle { 0%, 100% { opacity: 0.2; transform: scale(0.8) rotate(0deg); } 50% { opacity: 0.9; transform: scale(1.2) rotate(180deg); } }
    .` + widgetId + `-sparkles { position: absolute !important; top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important; pointer-events: none !important; z-index: 1 !important; }
    .` + widgetId + `-sparkle { position: absolute !important; color: ` + accentColor + ` !important; animation: ` + widgetId + `-twinkle 3s infinite ease-in-out !important; display: inline-flex !important; }
    .` + widgetId + `-s1 { top: 6% !important; left: 6% !important; animation-delay: 0s !important; font-size: 14px !important; }
    .` + widgetId + `-s2 { top: 10% !important; right: 8% !important; animation-delay: 0.7s !important; font-size: 18px !important; }
    .` + widgetId + `-s3 { bottom: 22% !important; left: 8% !important; animation-delay: 1.4s !important; font-size: 14px !important; }
    .` + widgetId + `-s4 { bottom: 16% !important; right: 10% !important; animation-delay: 2.1s !important; font-size: 14px !important; }

    .` + widgetId + `-top-row { display: flex !important; gap: 10px !important; align-items: center !important; z-index: 2 !important; }
    .` + widgetId + `-avatar-wrap { position: relative !important; flex-shrink: 0 !important; }
    .` + widgetId + `-avatar { width: 55px !important; height: 55px !important; border-radius: 50% !important; object-fit: cover !important; border: 3px solid #ffffff !important; box-shadow: 0 2px 6px rgba(0,0,0,0.1) !important; display: block !important; }
    
    .` + widgetId + `-header-info { flex-grow: 1 !important; overflow: hidden !important; }
    .` + widgetId + `-name-row { display: flex !important; align-items: center !important; gap: 6px !important; flex-wrap: wrap !important; }
    .` + widgetId + `-name { font-weight: bold !important; font-size: 1.05em !important; color: ` + accentColor + ` !important; white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; margin: 0 !important; }
    .` + widgetId + `-pronouns { font-size: 0.72em !important; color: #7f8c8d !important; background: rgba(255,255,255,0.8) !important; padding: 1px 6px !important; border-radius: 8px !important; border: 1px solid #dfe6e9 !important; font-style: italic !important; }
    
    .` + widgetId + `-tags { display: flex !important; gap: 4px !important; align-items: center !important; margin-top: 3px !important; flex-wrap: wrap !important; }
    .` + widgetId + `-niche { display: inline-block !important; background: #ffffff !important; padding: 2px 7px !important; border-radius: 10px !important; font-size: 0.75em !important; color: #636e72 !important; border: 1px solid #dfe6e9 !important; }
    .` + widgetId + `-extra-meta { display: inline-flex !important; align-items: center !important; gap: 4px !important; background: rgba(255,255,255,0.9) !important; padding: 2px 7px !important; border-radius: 10px !important; font-size: 0.75em !important; color: #2d3436 !important; border: 1px solid #dfe6e9 !important; }

    .` + widgetId + `-status-pill { display: inline-flex !important; align-items: center !important; gap: 4px !important; background: rgba(255,255,255,0.9) !important; padding: 2px 7px !important; border-radius: 10px !important; font-size: 0.75em !important; color: #2d3436 !important; border: 1px solid #dfe6e9 !important; }
    .` + widgetId + `-status-dot { width: 6px !important; height: 6px !important; border-radius: 50% !important; background-color: ` + statusColor + ` !important; display: inline-block !important; }

    .` + widgetId + `-bio { margin: 4px 0 !important; font-size: 0.85em !important; line-height: 1.25 !important; color: #4a4a4a !important; display: -webkit-box !important; -webkit-line-clamp: 2 !important; -webkit-box-orient: vertical !important; overflow: hidden !important; z-index: 2 !important; }
    
    .` + widgetId + `-likes-dislikes { display: flex !important; flex-direction: column !important; gap: 3px !important; background: rgba(255, 255, 255, 0.75) !important; border-radius: 8px !important; padding: 5px 8px !important; margin: 2px 0 !important; font-size: 0.78em !important; z-index: 2 !important; border: 1px solid rgba(0,0,0,0.04) !important; }
    .` + widgetId + `-item { display: flex !important; align-items: center !important; gap: 5px !important; }
    .` + widgetId + `-item-text { overflow: hidden !important; color: #2d3436 !important; }

    .` + widgetId + `-bloglink { display: flex !important; align-items: center !important; gap: 4px !important; font-size: 0.82em !important; color: ` + accentColor + ` !important; text-decoration: none !important; font-weight: bold !important; word-break: break-all !important; z-index: 2 !important; }
    .` + widgetId + `-credit { text-align: center !important; font-size: 0.75em !important; color: #7f8c8d !important; border-top: 1px dashed rgba(0,0,0,0.1) !important; padding-top: 4px !important; margin-top: 2px !important; z-index: 2 !important; display: flex !important; align-items: center !important; justify-content: center !important; gap: 3px !important; }
    .` + widgetId + `-credit a { color: ` + accentColor + ` !important; text-decoration: none !important; font-weight: bold !important; }
    
    .` + widgetId + `-back { transform: rotateY(180deg) !important; padding: 12px !important; }
    .` + widgetId + `-back-title { font-weight: bold !important; text-align: center !important; margin: 0 0 8px 0 !important; color: ` + accentColor + ` !important; font-size: 0.95em !important; display: flex !important; align-items: center !important; justify-content: center !important; gap: 5px !important; }
    .` + widgetId + `-currently-box { flex: 1 !important; display: flex !important; flex-direction: column !important; justify-content: center !important; gap: 8px !important; background: rgba(255,255,255,0.85) !important; border: 1px solid rgba(0,0,0,0.08) !important; border-radius: 8px !important; padding: 12px !important; font-size: 0.85em !important; line-height: 1.4 !important; color: #2d3436 !important; overflow-y: auto !important; }
    .` + widgetId + `-currently-row { display: flex !important; align-items: flex-start !important; gap: 8px !important; }
    
    .` + widgetId + `-instruction { text-align: center !important; margin-top: 8px !important; font-size: 0.8em !important; color: ` + accentColor + ` !important; cursor: pointer !important; user-select: none !important; font-weight: bold !important; display: flex !important; align-items: center !important; justify-content: center !important; gap: 4px !important; }
  `;

  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.getElementsByTagName('head')[0].appendChild(style);

  var sparkleHTML = sparkles ? `
    <div class="` + widgetId + `-sparkles">
      <span class="` + widgetId + `-sparkle ` + widgetId + `-s1"><span class="iconify" data-icon="lucide:sparkles"></span></span>
      <span class="` + widgetId + `-sparkle ` + widgetId + `-s2"><span class="iconify" data-icon="solar:stars-minimalistic-bold-duotone"></span></span>
      <span class="` + widgetId + `-sparkle ` + widgetId + `-s3"><span class="iconify" data-icon="lucide:heart"></span></span>
      <span class="` + widgetId + `-sparkle ` + widgetId + `-s4"><span class="iconify" data-icon="lucide:sparkle"></span></span>
    </div>
  ` : '';

  var pronounsHTML = pronouns ? '<span class="' + widgetId + '-pronouns">' + pronouns + '</span>' : '';
  var statusHTML = status ? '<span class="' + widgetId + '-status-pill"><span class="' + widgetId + '-status-dot"></span>' + status + '</span>' : '';
  
  var feelingHTML = feeling ? '<span class="' + widgetId + '-extra-meta"><span class="iconify" data-icon="lucide:smile" style="color:' + accentColor + ';"></span> ' + feeling + '</span>' : '';
  var nationalityHTML = nationality ? '<span class="' + widgetId + '-extra-meta"><span class="iconify" data-icon="lucide:map-pin" style="color:' + accentColor + ';"></span> ' + nationality + '</span>' : '';
  var ageHTML = age ? '<span class="' + widgetId + '-extra-meta"><span class="iconify" data-icon="lucide:cake" style="color:' + accentColor + ';"></span> ' + age + ' yrs</span>' : '';

  var likesHTML = likes ? `
    <div class="` + widgetId + `-item">
      <span class="iconify" data-icon="lucide:thumbs-up" style="color:` + accentColor + `; flex-shrink: 0;"></span>
      <span class="` + widgetId + `-item-text"><b>Likes:</b> ` + likes + `</span>
    </div>
  ` : '';

  var dislikesHTML = dislikes ? `
    <div class="` + widgetId + `-item">
      <span class="iconify" data-icon="lucide:thumbs-down" style="color:#e74c3c; flex-shrink: 0;"></span>
      <span class="` + widgetId + `-item-text"><b>Dislikes:</b> ` + dislikes + `</span>
    </div>
  ` : '';

  var likesDislikesSection = (likes || dislikes) ? `
    <div class="` + widgetId + `-likes-dislikes">
      ` + likesHTML + `
      ` + dislikesHTML + `
    </div>
  ` : '';

  // Dynamic Back Side Elements (Currently Doing & Focus)
  var currentlyDoingHTML = currentlyDoing ? `
    <div class="` + widgetId + `-currently-row">
      <span class="iconify" data-icon="lucide:activity" style="color:` + accentColor + `; font-size: 1.2em; flex-shrink: 0; margin-top: 2px;"></span>
      <span><b>Currently Doing:</b> ` + currentlyDoing + `</span>
    </div>
  ` : '';

  var focusHTML = focus ? `
    <div class="` + widgetId + `-currently-row">
      <span class="iconify" data-icon="lucide:compass" style="color:` + accentColor + `; font-size: 1.2em; flex-shrink: 0; margin-top: 2px;"></span>
      <span><b>Focus:</b> ` + focus + `</span>
    </div>
  ` : '';

  var container = document.createElement('div');
  container.className = widgetId + '-container';
  container.innerHTML = `
    <div class="` + widgetId + `-perspective">
      <div class="` + widgetId + `-card" id="` + widgetId + `-card">
        
        <!-- FRONT CARD FACE -->
        <div class="` + widgetId + `-face">
          ` + sparkleHTML + `
          <div class="` + widgetId + `-top-row">
            <div class="` + widgetId + `-avatar-wrap">
              <img class="` + widgetId + `-avatar" src="` + avatar + `" alt="Avatar" />
            </div>
            <div class="` + widgetId + `-header-info">
              <div class="` + widgetId + `-name-row">
                <div class="` + widgetId + `-name">` + name + `</div>
                ` + pronounsHTML + `
              </div>
              <div class="` + widgetId + `-tags">
                <span class="` + widgetId + `-niche">` + niche + `</span>
                ` + statusHTML + `
                ` + feelingHTML + `
                ` + nationalityHTML + `
                ` + ageHTML + `
              </div>
            </div>
          </div>
          <div class="` + widgetId + `-bio">` + bio + `</div>
          
          ` + likesDislikesSection + `

          <a class="` + widgetId + `-bloglink" href="` + bloglink + `" target="_blank" rel="nofollow noopener noreferrer">
            <span class="iconify" data-icon="lucide:globe" data-inline="true"></span> ` + displayLink + `
          </a>

          <div class="` + widgetId + `-credit">
            Made with <span class="iconify" data-icon="lucide:heart" style="color:` + accentColor + `;"></span>
          </div>
        </div>

        <!-- BACK CARD FACE -->
        <div class="` + widgetId + `-face ` + widgetId + `-back">
          ` + sparkleHTML + `
          <div class="` + widgetId + `-back-title">
            <span class="iconify" data-icon="lucide:sparkles"></span> Currently & About Me
          </div>
          <div class="` + widgetId + `-currently-box">
            ` + currentlyDoingHTML + `
            ` + focusHTML + `
            <div class="` + widgetId + `-currently-row">
              <span class="iconify" data-icon="lucide:user" style="color:` + accentColor + `; font-size: 1.2em; flex-shrink: 0; margin-top: 2px;"></span>
              <span><b>Name:</b> ` + name + ` (` + (pronouns || 'No pronouns listed') + `)</span>
            </div>
          </div>
          <div class="` + widgetId + `-credit">
            <span>Flip back anytime!</span>
          </div>
        </div>

      </div>
    </div>
    <div class="` + widgetId + `-instruction" id="` + widgetId + `-flip-btn">
      <span class="iconify" data-icon="lucide:refresh-cw"></span> Flip card to see more
    </div>
  `;

  currentScript.parentNode.insertBefore(container, currentScript);

  var cardElement = document.getElementById(widgetId + '-card');
  var flipBtn = document.getElementById(widgetId + `-flip-btn`);
  var isFlipped = false;
  
  flipBtn.addEventListener('click', function() {
    isFlipped = !isFlipped;
    if (isFlipped) {
      cardElement.className = widgetId + `-card flipped`;
      flipBtn.innerHTML = '<span class="iconify" data-icon="lucide:refresh-cw"></span> Back to Profile Front';
    } else {
      cardElement.className = widgetId + `-card`;
      flipBtn.innerHTML = '<span class="iconify" data-icon="lucide:refresh-cw"></span> Flip card to see more';
    }
  });
})();
