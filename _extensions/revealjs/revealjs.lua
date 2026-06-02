function shortcode(args, kwargs, meta)
  local file = kwargs["file"] or ""
  local height = kwargs["height"] or "500px"
  local class = kwargs["class"] or ""

  local html = '<iframe src="' .. file .. '" ' ..
               'class="' .. class .. '" ' ..
               'style="width:100%; height:' .. height .. '; border:0; border-radius:12px; display:block;" ' ..
               'loading="lazy" allowfullscreen></iframe>'

  return pandoc.RawInline("html", html)
end