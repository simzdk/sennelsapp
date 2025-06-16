<script lang="ts">
 import * as Tabs from "$lib/components/ui/tabs/index.js";
</script>
 
<div class="flex w-full max-w-sm flex-col gap-6 justify-center items-center mx-auto">
 <Tabs.Root value="fredag">
    <Tabs.List>
     <Tabs.Trigger value="friday">Fredag 20/6</Tabs.Trigger>
     <Tabs.Trigger value="saturday">Lørdag 21/6</Tabs.Trigger>
     <Tabs.Trigger value="sunday">Søndag 22/6</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="friday">
    </Tabs.Content>
    <Tabs.Content value="saturday">
    </Tabs.Content>
    <Tabs.Content value="sunday">
    </Tabs.Content>
 </Tabs.Root>
</div>